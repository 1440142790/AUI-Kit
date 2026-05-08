/**
 * Switch 开关
 *
 * @example React
 * import { Switch } from '@aui/react';
 * <Switch checked={on} onChange={setOn} />
 *
 * @example Vue
 * <Switch :checked="on" @change="setOn" />
 */

import React, { useMemo } from 'react';
import { type SwitchProps, cx } from '@aui/core';

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, defaultChecked = false, onChange, loading = false, checkedChildren, unCheckedChildren, size = 'md', className, disabled, ...rest }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const isControlled = checked !== undefined;
    const isOn = isControlled ? checked! : internalChecked;

    const handleClick = () => {
      if (disabled || loading) return;
      const next = !isOn;
      if (!isControlled) setInternalChecked(next);
      onChange?.(next);
    };

    const sizeClass = size === 'sm'
      ? { track: 'w-9 h-5', thumb: 'w-4 h-4', translate: 'translate-x-4' }
      : { track: 'w-11 h-6', thumb: 'w-5 h-5', translate: 'translate-x-5' };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isOn}
        onClick={handleClick}
        disabled={disabled || loading}
        className={cx(
          'relative inline-flex items-center rounded-full transition-all duration-200 cursor-pointer',
          sizeClass.track,
          isOn ? 'bg-[#1677ff]' : 'bg-[#d9d9d9]',
          (disabled || loading) ? 'opacity-50 cursor-not-allowed' : '',
          className
        )}
        {...rest}
      >
        {loading && (
          <svg className="absolute inset-0 m-auto animate-spin w-3 h-3" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
        )}
        <span
          className={cx(
            'absolute bg-white rounded-full shadow transition-transform duration-200',
            sizeClass.thumb,
            isOn ? sizeClass.translate : 'translate-x-0.5'
          )}
        />
        {(checkedChildren || unCheckedChildren) && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium px-1">
            <span className={cx('transition-opacity', isOn ? 'opacity-100 text-white' : 'opacity-0')}>
              {checkedChildren}
            </span>
            <span className={cx('absolute transition-opacity', !isOn ? 'opacity-100 text-[#595959]' : 'opacity-0')}>
              {unCheckedChildren}
            </span>
          </span>
        )}
      </button>
    );
  }
);

Switch.displayName = 'Switch';
