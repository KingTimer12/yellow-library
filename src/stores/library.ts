import { createMemo, createRoot, createSignal } from "solid-js"

import { FOLDERS, WORKS, getFolder } from "@/data/library"

const [activeFolder, setActiveFolder] = createSignal("all")
const [activeTag, setActiveTag] = createSignal<string | null>(null)

// Derived state lives in a root so the memos are owned and never disposed
// while the (singleton) store is alive.
const { visibleWorks, activeFolderName } = createRoot(() => ({
  /** Works filtered by the active folder + optional tag. */
  visibleWorks: createMemo(() => {
    let list = WORKS.filter(
      (w) => activeFolder() === "all" || w.folder === activeFolder(),
    )
    const tag = activeTag()
    if (tag) list = list.filter((w) => w.tagList.includes(tag))
    return list
  }),
  activeFolderName: createMemo(
    () => getFolder(activeFolder())?.name ?? "Todas as obras",
  ),
}))

export const selectFolder = (id: string) => {
  setActiveFolder(id)
  setActiveTag(null)
}

export const toggleTag = (tag: string) =>
  setActiveTag((cur) => (cur === tag ? null : tag))

export const folderManageCount = () => FOLDERS.length

export { activeFolder, activeTag, visibleWorks, activeFolderName }
