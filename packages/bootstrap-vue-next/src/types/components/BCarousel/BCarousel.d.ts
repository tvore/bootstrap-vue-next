import type {ComputedRef, Ref} from 'vue'

// Props
export interface Props {
  id?: string
  imgHeight?: string
  imgWidth?: string
  background?: string
  modelValue?: number
  controls?: boolean
  indicators?: boolean
  interval?: number
  noTouch?: boolean
  noWrap?: boolean
}
// Emits
export interface Emits {
  (e: 'sliding-start', value: Event): void
  (e: 'sliding-end', value: Event): void
}
// Other
export interface ParentData {
  background?: string
  width?: string
  height?: string
}

export type ParentRegistry = (tab: symbol) => {
  isActive: ComputedRef<boolean>
  isLeaving: ComputedRef<boolean>
  isEntering: ComputedRef<boolean>
  direction: Readonly<Ref<'start' | 'end'>>
  done: () => void
  unregister: () => void
}
