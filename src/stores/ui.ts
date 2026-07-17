import { createSignal } from "solid-js"

/** Folder-manager drawer visibility (opened from sidebar + settings). */
const [folderManagerOpen, setFolderManagerOpen] = createSignal(false)

export const openFolderManager = () => setFolderManagerOpen(true)
export const closeFolderManager = () => setFolderManagerOpen(false)
export const toggleFolderManager = () => setFolderManagerOpen((o) => !o)

export { folderManagerOpen }
