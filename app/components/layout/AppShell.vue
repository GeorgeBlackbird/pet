<template>
  <div :class="$style.shell">
    <aside :class="$style.sidebar">
      <slot name="sidebar" />
    </aside>

    <div :class="$style.mainColumn">
      <header :class="$style.header">
        <slot name="header" />
      </header>

      <main :class="$style.main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss" module>
.shell {
  display: grid;
  grid-template-columns: var(--sidebar-width, 16rem) 1fr;
  min-height: 100dvh;
  background: var(--color-bg);
}

.sidebar {
  border-right: 1px solid var(--color-border, rgb(255 255 255 / 8%));
  overflow-y: auto;
}

.mainColumn {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.header {
  flex-shrink: 0;
  height: var(--header-height, 3.5rem);
  border-bottom: 1px solid var(--color-border, rgb(255 255 255 / 8%));
}

.main {
  flex: 1;
  overflow: auto;
  padding: var(--space-4, 1rem);
}
</style>
