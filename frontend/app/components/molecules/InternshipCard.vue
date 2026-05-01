<script setup lang="ts">
import type { Internship } from '~/types/internship';
import { useMotion } from '@vueuse/motion';

const props = defineProps<{
  internship: Internship;
}>();

const cardRef = ref(null);

useMotion(cardRef, {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25 } },
  hover: { scale: 1.05, rotate: 1 }
});
</script>

<template>
  <div ref="cardRef" :class="$style.card">
    <div :class="$style.card__glow"></div>
    
    <div :class="$style.card__header">
      <div :class="$style.card__icon">
        <!-- Modern Animal/Abstract Icon -->
        <div :class="$style.animalIcon">🦊</div>
      </div>
      <span :class="$style.card__badge">{{ internship.category }}</span>
    </div>

    <div :class="$style.card__body">
      <h3 :class="$style.card__title">{{ internship.title }}</h3>
      <div :class="$style.card__company">
        <img :src="internship.company.logo" :class="$style.card__logo" />
        <span>{{ internship.company.name }}</span>
      </div>
    </div>

    <div :class="$style.card__footer">
      <div :class="$style.card__info">
        <span :class="$style.card__price">€{{ internship.salary }}</span>
        <span :class="$style.card__duration">{{ internship.duration }} mo</span>
      </div>
      <AtomsAppButton variant="primary" size="sm">Hunt Goal</AtomsAppButton>
    </div>
  </div>
</template>

<style lang="scss" module>
.card {
  background: rgba(24, 61, 61, 0.4);
  border: 2px solid var(--color-border);
  border-radius: 32px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &__glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 140, 66, 0.1) 0%, transparent 70%);
    pointer-events: none;
    transition: transform 0.6s ease;
  }

  &:hover &__glow {
    transform: translate(20%, 20%);
  }

  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__icon {
    width: 48px;
    height: 48px;
    background: var(--color-surface);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.05);
  }

  &__badge {
    font-size: 0.65rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background: var(--color-accent);
    color: #030303;
    padding: 0.3rem 0.8rem;
    border-radius: 99px;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 0.75rem;
  }

  &__company {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--color-text-muted);
    font-size: 0.875rem;
    font-weight: 600;
  }

  &__logo {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    filter: grayscale(1) brightness(2);
  }

  &__footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__price {
    font-size: 1.25rem;
    font-weight: 900;
    color: var(--color-primary);
  }

  &__duration {
    font-size: 0.75rem;
    color: var(--color-text-muted);
  }
}

.animalIcon {
  animation: bounce 2s infinite ease-in-out;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
</style>
