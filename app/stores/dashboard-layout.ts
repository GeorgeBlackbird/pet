import { defineStore } from 'pinia'
import type { DashboardWidget } from '#shared/types/dashboard'

const STORAGE_KEY = 'pet:dashboard-layout:v1'

function createDefaultWidgets(): DashboardWidget[] {
  return [
    { id: 'metric-users', type: 'metric', title: 'Active users', colSpan: 1 },
    { id: 'metric-conversion', type: 'metric', title: 'Conversion', colSpan: 1 },
    { id: 'chart-traffic', type: 'chart', title: 'Traffic overview', colSpan: 2 },
    { id: 'table-events', type: 'table', title: 'Recent events', colSpan: 2 },
    { id: 'placeholder-notes', type: 'placeholder', title: 'Notes', colSpan: 1 },
  ]
}

export const useDashboardLayoutStore = defineStore('dashboard-layout', () => {
  const widgets = ref<DashboardWidget[]>(createDefaultWidgets())
  const hydrated = ref(false)

  function hydrate() {
    if (!import.meta.client || hydrated.value) return

    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as unknown
        if (Array.isArray(parsed) && parsed.length > 0) {
          widgets.value = parsed as DashboardWidget[]
        }
      } catch {
        console.error('Failed to parse dashboard layout from localStorage')
      }
    }

    hydrated.value = true
  }

  function persist() {
    if (!import.meta.client) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(widgets.value))
  }

  function resetLayout() {
    widgets.value = createDefaultWidgets()
    persist()
  }

  return {
    widgets,
    hydrated,
    hydrate,
    persist,
    resetLayout,
  }
})
