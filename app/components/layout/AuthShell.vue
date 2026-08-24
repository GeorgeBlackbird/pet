<template>
  <div :class="$style.page">
    <div :class="$style.card">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" module>
.page {
  display: grid;
  min-height: 100dvh;
  place-items: center;
  padding: 1rem;
  background: var(--color-bg);
}

.card {
  width: 100%;
  max-width: 24rem;
}
</style>
