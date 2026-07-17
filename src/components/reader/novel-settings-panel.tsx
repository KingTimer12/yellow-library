import { For, Show } from "solid-js"

import { cx } from "@/lib/cva"
import {
  NOVEL_SWATCHES,
  decFontSize,
  incFontSize,
  novelFontSize,
  novelTheme,
  panelOpen,
  setNovelTheme,
} from "@/stores/reader"

/** "Aa" popover: text size stepper + reading theme swatches. */
const NovelSettingsPanel = () => {
  return (
    <Show when={panelOpen()}>
      <div class="absolute right-4 top-[60px] w-[260px] bg-surface border border-border rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 text-foreground z-20">
        <div class="text-xs font-bold tracking-[0.03em] uppercase text-muted-foreground mb-3">
          Aparência da leitura
        </div>

        <div class="flex items-center justify-between mb-3.5">
          <span class="text-[12.5px]">Tamanho do texto</span>
          <div class="flex items-center gap-2">
            <button
              type="button"
              onClick={decFontSize}
              class="w-6 h-6 rounded-md border border-border bg-transparent text-foreground"
            >
              –
            </button>
            <span class="text-xs w-[22px] text-center">{novelFontSize()}</span>
            <button
              type="button"
              onClick={incFontSize}
              class="w-6 h-6 rounded-md border border-border bg-transparent text-foreground"
            >
              +
            </button>
          </div>
        </div>

        <div class="text-[12.5px] mb-2">Tema de leitura</div>
        <div class="flex gap-2">
          <For each={NOVEL_SWATCHES}>
            {(sw) => (
              <button
                type="button"
                onClick={() => setNovelTheme(sw.key)}
                class={cx(
                  "w-[30px] h-[30px] rounded-full p-0 border-2",
                  novelTheme() === sw.key ? "border-primary" : "border-border",
                )}
                style={{ background: sw.bg }}
              />
            )}
          </For>
        </div>
      </div>
    </Show>
  )
}

export default NovelSettingsPanel
