<template>
  <nav :class="$style.sidebar" aria-label="Основная навигация">
    <div class="p-4 font-semibold">Workspace</div>
    <ul class="flex flex-col gap-1 px-2">
      <li><NuxtLink to="/">Dashboard</NuxtLink></li>
    </ul>
  </nav>
</template>

<style lang="scss" module>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
