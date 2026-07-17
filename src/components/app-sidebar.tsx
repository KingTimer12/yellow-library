import { For } from "solid-js"
import { useLocation, useNavigate } from "@solidjs/router"

import { NAV_ICONS } from "@/components/icons"
import { NAV_ITEMS, isNavActive } from "@/components/layout/nav"
import { cx } from "@/lib/cva"
import { FOLDERS } from "@/data/library"
import { activeFolder, selectFolder } from "@/stores/library"
import { openFolderManager } from "@/stores/ui"

const AppSidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const goToFolder = (id: string) => {
    selectFolder(id)
    navigate("/")
  }

  return (
    <aside class="flex-none w-[220px] flex flex-col border-r border-border p-[14px_10px] gap-0.5 overflow-y-auto">
      <For each={NAV_ITEMS}>
        {(item) => {
          const active = () => isNavActive(item, location.pathname)
          const Icon = NAV_ICONS[item.key]
          return (
            <button
              type="button"
              onClick={() => navigate(item.path)}
              class={cx(
                "flex items-center gap-2.75 px-2.5 py-2.25 rounded-[9px] border-none text-[13.5px] text-left transition-colors",
                active()
                  ? "bg-surface-2 text-foreground font-semibold"
                  : "bg-transparent text-muted-foreground font-medium hover:bg-surface-2/60",
              )}
            >
              <span class="w-4.5 h-4.5 flex">
                <Icon size={18} />
              </span>
              {item.label}
            </button>
          )
        }}
      </For>

      <div class="mt-4.5 pt-3.5 border-t border-border">
        <div class="flex items-center justify-between px-2 pb-2 text-[11px] tracking-[0.06em] uppercase text-muted-foreground">
          <span>Pastas</span>
          <button
            type="button"
            onClick={openFolderManager}
            class="border-none bg-transparent text-primary text-[11px] font-semibold"
          >
            + Nova
          </button>
        </div>

        <For each={FOLDERS}>
          {(f) => {
            const active = () => activeFolder() === f.id
            return (
              <button
                type="button"
                onClick={() => goToFolder(f.id)}
                class={cx(
                  "w-full flex items-center gap-2 px-2 py-2 rounded-lg border-none text-[13px] transition-colors",
                  active()
                    ? "bg-surface-2 text-foreground font-semibold"
                    : "bg-transparent text-muted-foreground font-medium hover:bg-surface-2/60",
                )}
              >
                <span class="flex-1 text-left">{f.name}</span>
                <span class="text-[11px] text-muted-foreground">{f.count}</span>
              </button>
            )
          }}
        </For>
      </div>
    </aside>
  )
}

export default AppSidebar
