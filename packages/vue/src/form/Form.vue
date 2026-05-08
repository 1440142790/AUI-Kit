<script setup lang="ts">
/**
 * Form 表单
 */
import { provide, reactive } from 'vue';
import { type FormProps } from '../types/aui-types';

const props = withDefaults(defineProps<FormProps>(), {
  layout: 'vertical',
  labelAlign: 'right',
  disabled: false,
});

const emit = defineEmits<{ finish: [values: Record<string, unknown>]; finishFailed: [values: Record<string, unknown>]; change: [values: Record<string, unknown>] }>();

const values = reactive<Record<string, unknown>>({ ...props.initialValues });

const setFieldValue = (name: string, value: unknown) => {
  values[name] = value;
  emit('change', { ...values });
};

provide('formValues', values);
provide('formSetFieldValue', setFieldValue);
provide('formLayout', props.layout);

const handleSubmit = (e: Event) => {
  e.preventDefault();
  emit('finish', { ...values });
};
</script>

<template>
  <form
    :class="cx('flex', layout === 'vertical' ? 'flex-col gap-3' : layout === 'inline' ? 'flex-row items-center gap-3 flex-wrap' : 'flex-row items-center gap-3')"
    @submit="handleSubmit"
  >
    <slot />
  </form>
</template>
