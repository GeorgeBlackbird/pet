<template>
  <LayoutAppShell>
    <template #sidebar>
      <LayoutAppSidebar />
    </template>

    <template #header>
      <LayoutAppHeader />
    </template>

    <slot />
  </LayoutAppShell>
</template>
