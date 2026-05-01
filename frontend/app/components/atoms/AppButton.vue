<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
});
</script>

<template>
  <button :class="[
    $style.button,
    $style[`button--${variant}`],
    $style[`button--${size}`],
    { [$style['button--loading']]: loading }
  ]">
    <span v-if="loading" :class="$style.loader"></span>
    <slot v-else />
  </button>
</template>

<style lang="scss" module>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  font-weight: 700;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid transparent;
  gap: 0.5rem;

  &--primary {
    background: var(--color-primary);
    color: white;
    &:hover {
      filter: brightness(1.1);
      box-shadow: 0 0 20px var(--color-primary-glow);
    }
  }

  &--secondary {
    background: var(--color-surface);
    color: var(--color-text);
    border-color: var(--color-border);
    &:hover {
      background: var(--color-surface-hover);
    }
  }

  &--md {
    padding: 0.75rem 1.75rem;
    font-size: 0.875rem;
  }

  &--loading {
    opacity: 0.7;
    pointer-events: none;
  }
}

.loader {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
