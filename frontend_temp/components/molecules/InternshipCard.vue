<script setup lang="ts">
import type { Internship } from '~/types/internship';
import { useMotion } from '@vueuse/motion';

const props = defineProps<{
  internship: Internship;
}>();

const cardRef = ref(null);

// Premium smooth entry animation
useMotion(cardRef, {
  initial: { opacity: 0, scale: 0.95, y: 30 },
  enter: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 800, ease: 'backOut' } 
  },
  hover: { 
    y: -8, 
    transition: { duration: 300, ease: 'easeOut' } 
  }
});
</script>

<template>
  <div 
    ref="cardRef"
    class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
  >
    <!-- Animated Gradient Background -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

    <div class="space-y-6">
      <!-- Top Section: Category & Actions -->
      <div class="flex items-center justify-between">
        <span class="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-400">
          {{ internship.category }}
        </span>
        <button class="text-white/20 hover:text-white transition-colors">
          <Icon name="ph:bookmark-simple-bold" size="20" />
        </button>
      </div>

      <!-- Main Info -->
      <div class="space-y-2">
        <h3 class="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
          {{ internship.title }}
        </h3>
        <div class="flex items-center gap-2">
          <div class="h-6 w-6 rounded-md bg-white/10 overflow-hidden">
            <img :src="internship.company.logo" alt="Logo" class="h-full w-full object-cover" />
          </div>
          <p class="text-sm font-medium text-white/60">
            {{ internship.company.name }} • {{ internship.location }}
          </p>
        </div>
      </div>

      <!-- Features Bento Gridlet -->
      <div class="grid grid-cols-2 gap-3">
        <div class="rounded-2xl bg-white/5 p-3 flex flex-col gap-1">
          <span class="text-[10px] uppercase text-white/40 font-semibold">Duration</span>
          <span class="text-sm text-white/90 font-medium">{{ internship.duration }} Months</span>
        </div>
        <div class="rounded-2xl bg-white/5 p-3 flex flex-col gap-1">
          <span class="text-[10px] uppercase text-white/40 font-semibold">Type</span>
          <span class="text-sm text-white/90 font-medium">{{ internship.isPaid ? 'Paid' : 'Unpaid' }}</span>
        </div>
      </div>
    </div>

    <!-- CTA Button -->
    <button class="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-black transition-transform active:scale-95 hover:bg-blue-400 hover:text-white">
      Apply Now
      <Icon name="ph:arrow-right-bold" />
    </button>
  </div>
</template>

<style scoped>
.backdrop-blur-2xl {
  backdrop-filter: blur(40px) saturate(200%);
}
</style>
