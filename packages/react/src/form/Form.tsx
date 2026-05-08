/**
 * Form 表单
 *
 * @fileoverview 表单容器，所有表单项必须在 Form 内使用
 *
 * @example React
 * import { Form, FormItem, Input, Button } from '@aui/react';
 *
 * <Form onFinish={handleSubmit} layout="vertical">
 *   <FormItem name="email" label="邮箱" rules={[{ required: true, message: '请输入邮箱' }]}>
 *     <Input placeholder="请输入邮箱" />
 *   </FormItem>
 *   <FormItem name="password" label="密码">
 *     <Input type="password" placeholder="请输入密码" />
 *   </FormItem>
 *   <Button type="primary" htmlType="submit">提交</Button>
 * </Form>
 *
 * @example Vue
 * <Form @finish="handleSubmit" layout="vertical">
 *   <FormItem name="email" label="邮箱" :rules="emailRules">
 *     <Input placeholder="请输入邮箱" />
 *   </FormItem>
 * </Form>
 */

import React, { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react';
import { type FormProps as BaseFormProps, type FormRule, cx } from '@aui/core';

interface FormContextValue {
  values: Record<string, unknown>;
  errors: Record<string, string>;
  setFieldValue: (name: string, value: unknown) => void;
  validateField: (name: string, rules?: FormRule[]) => Promise<boolean>;
  layout: 'horizontal' | 'vertical' | 'inline';
  labelWidth?: number | string;
}

const FormContext = createContext<FormContextValue | null>(null);

export function useFormContext() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error('useFormContext must be used within Form');
  return ctx;
}

export const Form = React.forwardRef<HTMLFormElement, BaseFormProps & { children?: ReactNode }>(
  ({ initialValues = {}, onFinish, onFinishFailed, layout = 'vertical', labelWidth, children, className, ...rest }, ref) => {
    const [values, setValues] = useState<Record<string, unknown>>(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const setFieldValue = useCallback((name: string, value: unknown) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
    }, []);

    const validateField = useCallback(async (name: string, rules?: FormRule[]): Promise<boolean> => {
      if (!rules || rules.length === 0) return true;
      const value = values[name];
      for (const rule of rules) {
        if (rule.required && (value === undefined || value === null || value === '')) {
          setErrors((prev) => ({ ...prev, [name]: rule.message ?? '此字段为必填项' }));
          return false;
        }
        if (rule.type === 'email' && typeof value === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setErrors((prev) => ({ ...prev, [name]: rule.message ?? '邮箱格式不正确' }));
          return false;
        }
        if (rule.min !== undefined && typeof value === 'string' && value.length < rule.min) {
          setErrors((prev) => ({ ...prev, [name]: rule.message ?? `最少 ${rule.min} 个字符` }));
          return false;
        }
        if (rule.max !== undefined && typeof value === 'string' && value.length > rule.max) {
          setErrors((prev) => ({ ...prev, [name]: rule.message ?? `最多 ${rule.max} 个字符` }));
          return false;
        }
      }
      setErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
      return true;
    }, [values]);

    const handleFinish = useCallback(async (e: React.FormEvent) => {
      e.preventDefault();
      const allValid = await Promise.all(
        Object.keys(values).map((name) => validateField(name))
      );
      if (allValid.every(Boolean)) {
        onFinish?.(values);
      } else {
        onFinishFailed?.(values, errors);
      }
    }, [values, errors, onFinish, onFinishFailed, validateField]);

    const layoutClass = useMemo(() => ({
      vertical: 'flex-col',
      horizontal: 'flex-row items-center',
      inline: 'flex-row items-center flex-wrap gap-2',
    }), []);

    const contextValue = useMemo(() => ({
      values, errors, setFieldValue, validateField,
      layout: layout as 'horizontal' | 'vertical' | 'inline',
      labelWidth,
    }), [values, errors, layout, labelWidth]);

    return (
      <FormContext.Provider value={contextValue}>
        <form
          ref={ref}
          onSubmit={handleFinish}
          className={cx('flex gap-3', layoutClass[layout], className)}
          {...rest}
        >
          {children}
        </form>
      </FormContext.Provider>
    );
  }
);

Form.displayName = 'Form';

// ============================================================
// Form.Item
// ============================================================

import { type FormItemProps as BaseFormItemProps } from '@aui/core';

export const FormItem = React.forwardRef<HTMLDivElement, BaseFormItemProps & { children?: ReactNode }>(
  ({ name, label, rules, required, error, help, labelWidth, span, children, className }, ref) => {
    const { layout, errors, setFieldValue, validateField } = useFormContext();
    const fieldError = name ? (error ?? errors[name]) : undefined;

    const handleChange = useCallback((value: unknown) => {
      if (name) setFieldValue(name, value);
    }, [name, setFieldValue]);

    const labelWidthStyle = useMemo(() => {
      if (!label || layout === 'vertical') return {};
      return { width: typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth, minWidth: typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth };
    }, [label, layout, labelWidth]);

    const isVertical = layout === 'vertical';

    return (
      <div
        ref={ref}
        className={cx(
          'flex flex-col',
          span ? `col-span-${span}` : '',
          className
        )}
      >
        {label && (
          <label
            className={cx(
              'text-[14px] text-[#262626] mb-1 shrink-0',
              required ? 'required' : '',
            )}
            style={labelWidthStyle}
          >
            {label}
            {required && <span className="text-[#ff4d4f] ml-1">*</span>}
          </label>
        )}
        {/* 转发 onChange 给子组件 */}
        {React.isValidElement(children)
          ? React.cloneElement(children as React.ReactElement<{ onChange?: (v: unknown) => void }>, {
              onChange: (v: unknown) => {
                handleChange(v);
                (children as React.ReactElement<{ onChange?: (v: unknown) => void }>).props.onChange?.(v);
              },
            })
          : children}
        {(fieldError || help) && (
          <span className={cx('text-xs mt-1', fieldError ? 'text-[#ff4d4f]' : 'text-[#8c8c8c]')}>
            {fieldError || help}
          </span>
        )}
      </div>
    );
  }
);

FormItem.displayName = 'FormItem';
