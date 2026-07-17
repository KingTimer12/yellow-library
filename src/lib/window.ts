import { getCurrentWindow } from "@tauri-apps/api/window"

/** True only inside the Tauri webview. In plain browser dev (`bun run dev`
 * without Tauri) the window APIs are absent, so the custom titlebar hides
 * itself and these helpers become no-ops. */
export const isTauri =
  typeof window !== "undefined" && "__TAURI_INTERNALS__" in window

const appWindow = isTauri ? getCurrentWindow() : null

export const minimizeWindow = () => appWindow?.minimize()
export const toggleMaximizeWindow = () => appWindow?.toggleMaximize()
export const closeWindow = () => appWindow?.close()

export const queryMaximized = async () =>
  appWindow ? appWindow.isMaximized() : false

/** Subscribe to maximize/restore changes (fires on any resize). Returns an
 * unsubscribe fn, or a no-op when running outside Tauri. */
export const onMaximizeChange = async (cb: (maximized: boolean) => void) => {
  if (!appWindow) return () => {}
  return appWindow.onResized(async () => cb(await appWindow.isMaximized()))
}
