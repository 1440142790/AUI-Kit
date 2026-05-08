<script setup lang="ts">
/** Upload 上传 */
import { ref } from 'vue';
import { type UploadProps, type UploadFile, cx } from '../types/aui-types';
const props = withDefaults(defineProps<UploadProps>(), {
  action: '#',
  listType: 'text',
  maxCount: 99,
  multiple: false,
  draggable: false,
});
const fileList = ref<UploadFile[]>(props.defaultFileList || []);
const emit = defineEmits<{ change: [fileList: UploadFile[]] }>();
const handleFile = (e: Event) => {
  const files = (e.target as HTMLInputElement).files;
  if (!files) return;
  Array.from(files).forEach((file, i) => {
    const item: UploadFile = { uid: `${Date.now()}-${i}`, name: file.name, status: 'done', url: URL.createObjectURL(file) };
    fileList.value.push(item);
  });
  emit('change', fileList.value);
};
</script>

<template>
  <div>
    <label :class="cx('inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#d9d9d9] rounded cursor-pointer text-[14px] text-[#595959] hover:border-[#4096ff]', draggable ? 'p-8 border-dashed' : '')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
      <span>{{ draggable ? '拖拽或点击上传' : '选择文件' }}</span>
      <input type="file" :multiple="multiple" :accept="accept" class="hidden" @change="handleFile" />
    </label>
    <div v-if="fileList.length > 0" class="mt-3 flex flex-col gap-2">
      <div v-for="file in fileList" :key="file.uid" class="flex items-center gap-2 text-[14px]">
        <span>{{ file.name }}</span>
        <span v-if="file.status === 'uploading'" class="text-[#1677ff]">上传中...</span>
        <span v-else-if="file.status === 'done'" class="text-[#52c41a]">✓</span>
        <span v-else class="text-[#ff4d4f]">✗</span>
      </div>
    </div>
  </div>
</template>
