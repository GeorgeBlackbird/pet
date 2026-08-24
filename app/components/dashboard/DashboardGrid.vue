<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDashboardLayoutStore } from '~/stores/dashboard-layout'

const layout = useDashboardLayoutStore()
const { widgets } = storeToRefs(layout)

onMounted(() => {
  layout.hydrate()
})

function onDragEnd() {
  layout.persist()
}
</script>

<template>
  <section class="space-y-4">
    <header class="flex items-center justify-between gap-4">
      <div>
        <h1 class="text-xl font-semibold tracking-tight">Dashboard</h1>
        <p class="text-muted-foreground text-sm">
          Перетаскивай виджеты за иконку слева в заголовке.
        </p>
      </div>

      <Button variant="outline" size="sm" @click="layout.resetLayout()"> Сбросить layout </Button>
    </header>

    <ClientOnly>
      <Draggable
        v-model="widgets"
        item-key="id"
        tag="div"
        handle=".widget-handle"
        :animation="200"
        ghost-class="opacity-50"
        class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        @end="onDragEnd"
      >
        <template #item="{ element }">
          <DashboardWidgetShell :widget="element" />
        </template>
      </Draggable>

      <template #fallback>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="n in 4" :key="n" class="bg-muted/40 h-32 animate-pulse rounded-lg" />
        </div>
      </template>
    </ClientOnly>
  </section>
</template>
