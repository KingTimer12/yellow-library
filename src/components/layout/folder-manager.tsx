import { For, Show } from "solid-js"

import { FOLDERS } from "@/data/library"
import { closeFolderManager, folderManagerOpen } from "@/stores/ui"

const FolderManager = () => {
  return (
    <Show when={folderManagerOpen()}>
      <div
        class="scrim-enter absolute inset-0 bg-black/45 flex justify-end z-30"
        onClick={closeFolderManager}
      >
        <div
          class="drawer-enter w-[320px] max-w-[90%] bg-background h-full p-5 shadow-[-8px_0_24px_rgba(0,0,0,0.15)] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div class="flex items-center justify-between mb-4">
            <div class="text-[15px] font-bold">Pastas</div>
            <button
              type="button"
              onClick={closeFolderManager}
              class="border-none bg-transparent text-muted-foreground text-lg leading-none"
            >
              ×
            </button>
          </div>

          <div class="flex flex-col gap-2 mb-4">
            <For each={FOLDERS}>
              {(f) => (
                <div class="flex items-center justify-between px-3 py-2.5 border border-border rounded-[9px] transition-colors hover:border-primary/40">
                  <span class="text-[13px] font-medium">{f.name}</span>
                  <span class="text-[11.5px] text-muted-foreground">
                    {f.count} obras
                  </span>
                </div>
              )}
            </For>
          </div>

          <input
            placeholder="Nome da nova pasta"
            class="w-full border border-border bg-surface text-foreground rounded-[9px] px-3 py-2.25 text-[13px] mb-2.5 outline-none focus:border-ring"
          />
          <button
            type="button"
            class="w-full bg-primary text-primary-foreground border-none rounded-[9px] py-2.5 text-[13px] font-semibold transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
          >
            Criar pasta
          </button>
        </div>
      </div>
    </Show>
  )
}

export default FolderManager
