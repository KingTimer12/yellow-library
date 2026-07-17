import { For } from "solid-js"

import { cx } from "@/lib/cva"
import { FOLDERS } from "@/data/library"
import { activeFolder, selectFolder } from "@/stores/library"

/** Horizontal folder selector shown on mobile in place of the sidebar rail. */
const FolderChips = () => {
  return (
    <div class="flex gap-2 overflow-x-auto pb-3 mb-3">
      <For each={FOLDERS}>
        {(f) => {
          const active = () => activeFolder() === f.id
          return (
            <button
              type="button"
              onClick={() => selectFolder(f.id)}
              class={cx(
                "flex-none px-3.25 py-1.75 rounded-lg border text-[12.5px] font-semibold whitespace-nowrap transition-colors",
                active()
                  ? "border-primary bg-accent-soft text-primary"
                  : "border-border bg-surface text-foreground",
              )}
            >
              {f.name}
            </button>
          )
        }}
      </For>
    </div>
  )
}

export default FolderChips
