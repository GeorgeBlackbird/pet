<script setup lang="ts">
import { GripVertical } from '@lucide/vue'
import type { DashboardWidget } from '#shared/types/dashboard'

const props = defineProps<{
  widget: DashboardWidget
}>()

const spanClass = computed(() => (props.widget.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'))

const typeLabel = computed(() => props.widget.type)
</script>

<template>
  <article
    :class="[
      'bg-card text-card-foreground flex min-h-32 flex-col rounded-lg border shadow-sm',
      spanClass,
    ]"
  >
    <header class="flex items-center gap-2 border-b px-3 py-2">
      <button
        type="button"
        class="widget-handle text-muted-foreground hover:text-foreground cursor-grab active:cursor-grabbing"
        aria-label="Переместить виджет"
      >
        <GripVertical class="size-4" />
      </button>

      <h3 class="min-w-0 flex-1 truncate text-sm font-medium">{{ widget.title }}</h3>

      <span
        class="text-muted-foreground rounded-md bg-muted px-1.5 py-0.5 text-[10px] uppercase tracking-wide"
      >
        {{ typeLabel }}
      </span>
    </header>

    <div class="text-muted-foreground flex flex-1 items-center justify-center p-4 text-sm">
      <slot> Widget: {{ widget.type }} </slot>
    </div>
  </article>
</template>
