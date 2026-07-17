import { createSignal, onCleanup, onMount } from "solid-js"

import logoUrl from "@/assets/logo.svg"
import {
  closeWindow,
  minimizeWindow,
  onMaximizeChange,
  queryMaximized,
  toggleMaximizeWindow,
} from "@/lib/window"

/** Minimize glyph — single centered line. */
const GlyphMinimize = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
    <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" stroke-width="1" />
  </svg>
)

/** Maximize glyph — single square. */
const GlyphMaximize = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
    <rect x="1.5" y="1.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1" />
  </svg>
)

/** Restore glyph — two offset squares (shown when maximized). */
const GlyphRestore = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
    <rect x="1.5" y="2.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1" />
    <path d="M3.5 2.5 V1.5 H8.5 V6.5 H7.5" fill="none" stroke="currentColor" stroke-width="1" />
  </svg>
)

/** Close glyph — X. */
const GlyphClose = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
    <line x1="1.5" y1="1.5" x2="8.5" y2="8.5" stroke="currentColor" stroke-width="1" />
    <line x1="8.5" y1="1.5" x2="1.5" y2="8.5" stroke="currentColor" stroke-width="1" />
  </svg>
)

/** Custom window titlebar (decorations disabled in tauri.conf.json). Spans the
 * full width above the sidebar + content. The strip is a drag region; the
 * control cluster on the right stays interactive. */
const Titlebar = () => {
  const [maximized, setMaximized] = createSignal(false)

  onMount(async () => {
    setMaximized(await queryMaximized())
    const unsubscribe = await onMaximizeChange(setMaximized)
    onCleanup(unsubscribe)
  })

  return (
    <header
      data-tauri-drag-region
      class="flex-none h-8 flex items-center justify-between select-none bg-background border-b border-border pl-3"
    >
      {/* brand hint — mirrors the app mark, non-interactive so it stays draggable */}
      <div data-tauri-drag-region class="flex items-center gap-2 pointer-events-none">
        <img src={logoUrl} alt="" width={16} height={16} class="w-4 h-4 rounded-[4px]" />
        <span class="text-[11.5px] font-semibold tracking-[-0.01em] text-muted-foreground">
          Yellow Library
        </span>
      </div>

      <div class="flex items-stretch h-full">
        <button
          type="button"
          onClick={() => minimizeWindow()}
          aria-label="Minimizar"
          class="w-11 h-full flex items-center justify-center border-none bg-transparent text-muted-foreground transition-colors duration-150 hover:bg-surface-2 hover:text-foreground active:scale-95"
        >
          <GlyphMinimize />
        </button>
        <button
          type="button"
          onClick={() => toggleMaximizeWindow()}
          aria-label={maximized() ? "Restaurar" : "Maximizar"}
          class="w-11 h-full flex items-center justify-center border-none bg-transparent text-muted-foreground transition-colors duration-150 hover:bg-surface-2 hover:text-foreground active:scale-95"
        >
          {maximized() ? <GlyphRestore /> : <GlyphMaximize />}
        </button>
        <button
          type="button"
          onClick={() => closeWindow()}
          aria-label="Fechar"
          class="w-11 h-full flex items-center justify-center border-none bg-transparent text-muted-foreground transition-colors duration-150 hover:bg-[#e5484d] hover:text-white active:scale-95"
        >
          <GlyphClose />
        </button>
      </div>
    </header>
  )
}

export default Titlebar
