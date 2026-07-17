import { createSignal } from "solid-js"

import { INSTALLED_EXTENSIONS } from "@/data/extensions"
import type { Extension } from "@/data/types"

export type ExtTab = "installed" | "available"

const [extTab, setExtTab] = createSignal<ExtTab>("installed")
const [installed, setInstalled] = createSignal<Extension[]>(
  INSTALLED_EXTENSIONS.map((e) => ({ ...e })),
)

export const toggleExtension = (id: string) =>
  setInstalled((list) =>
    list.map((e) => (e.id === id ? { ...e, enabled: !e.enabled } : e)),
  )

export const removeExtension = (id: string) =>
  setInstalled((list) => list.filter((e) => e.id !== id))

export { extTab, setExtTab, installed }
