export type WidgetType = 'placeholder' | 'chart' | 'table' | 'metric'

export interface DashboardWidget {
  id: string
  type: WidgetType
  title: string
  colSpan?: 1 | 2
}
