import { For, Show } from "solid-js"

import ExtensionRow from "@/components/extensions/extension-row"
import ToggleSwitch from "@/components/extensions/toggle-switch"
import { cx } from "@/lib/cva"
import { AVAILABLE_EXTENSIONS } from "@/data/extensions"
import {
  extTab,
  installed,
  removeExtension,
  setExtTab,
  toggleExtension,
} from "@/stores/extensions"

const tabClass = (active: boolean) =>
  cx(
    "px-3.5 py-2.25 border-none bg-transparent text-[13px] font-semibold transition-all duration-200",
    active
      ? "text-foreground border-b-2 border-primary"
      : "text-muted-foreground border-b-2 border-transparent hover:text-foreground",
  )

const Extensions = () => {
  return (
    <div class="p-[18px_16px] md:p-[28px_32px]">
      <h1 class="m-0 mb-1 text-[22px] font-bold tracking-[-0.01em]">Extensões</h1>
      <p class="m-0 mb-4.5 text-[13px] text-muted-foreground">
        Instale fontes de mangás e novels a partir dos seus repositórios.
      </p>

      <div class="flex gap-1 border-b border-border mb-4.5">
        <button
          type="button"
          onClick={() => setExtTab("installed")}
          class={tabClass(extTab() === "installed")}
        >
          Instaladas
        </button>
        <button
          type="button"
          onClick={() => setExtTab("available")}
          class={tabClass(extTab() === "available")}
        >
          Disponíveis
        </button>
      </div>

      <Show when={extTab() === "installed"}>
        <div class="flex flex-col gap-2.5">
          <For each={installed()}>
            {(ext) => (
              <ExtensionRow ext={ext}>
                <ToggleSwitch
                  checked={!!ext.enabled}
                  onChange={() => toggleExtension(ext.id)}
                />
                <button
                  type="button"
                  onClick={() => removeExtension(ext.id)}
                  class="border border-border bg-transparent text-muted-foreground rounded-[7px] px-3 py-1.75 text-[12.5px] transition-colors hover:border-destructive hover:text-destructive active:scale-95"
                >
                  Remover
                </button>
              </ExtensionRow>
            )}
          </For>
        </div>
      </Show>

      <Show when={extTab() === "available"}>
        <div class="flex flex-col gap-5.5">
          <For each={AVAILABLE_EXTENSIONS}>
            {(grp) => (
              <div>
                <div class="text-xs font-bold tracking-[0.03em] uppercase text-muted-foreground mb-2">
                  {grp.repoName}
                </div>
                <div class="flex flex-col gap-2.5">
                  <For each={grp.items}>
                    {(ext) => (
                      <ExtensionRow ext={ext}>
                        <button
                          type="button"
                          class="border border-primary bg-transparent text-primary rounded-[7px] px-3.5 py-1.75 text-[12.5px] font-semibold transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-95"
                        >
                          Instalar
                        </button>
                      </ExtensionRow>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}

export default Extensions
