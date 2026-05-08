<script setup lang="ts">
/** Swiper 轮播组件 */
import { ref, onMounted, onUnmounted } from 'vue';
import { type SwiperProps, cx } from '../types/aui-types';

const props = withDefaults(defineProps<SwiperProps>(), {
  autoplay: false,
  dots: true,
  loop: false,
  interval: 3000,
});

const currentIndex = defineModel<number>('currentIndex', { default: 0 });
const slideRef = ref<HTMLDivElement | null>(null);
let timer: ReturnType<typeof setInterval> | null = null;

const startAutoplay = () => {
  if (props.autoplay) {
    timer = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % (props.children?.length || 1);
    }, props.interval);
  }
};

onMounted(() => { startAutoplay(); });
onUnmounted(() => { if (timer) clearInterval(timer); });

const goTo = (index: number) => { currentIndex.value = index; };
</script>

<template>
  <div ref="slideRef" class="relative overflow-hidden rounded-lg">
    <div
      class="flex transition-transform duration-300"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <slot />
    </div>
    <!-- 指示点 -->
    <div v-if="dots" class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
      <button
        v-for="(_, i) in (children?.length || 0)"
        :key="i"
        :class="cx(
          'w-1.5 h-1.5 rounded-full transition-all',
          i === currentIndex ? 'bg-white w-4' : 'bg-white/50',
        )"
        @click="goTo(i)"
      />
    </div>
  </div>
</template>
