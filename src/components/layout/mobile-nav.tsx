import { For } from "solid-js"
import { useLocation, useNavigate } from "@solidjs/router"

import { NAV_ICONS } from "@/components/icons"
import { NAV_ITEMS, isNavActive } from "@/components/layout/nav"

const MobileNav = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav class="flex-none flex border-t border-border px-1.5 py-2 bg-background">
      <For each={NAV_ITEMS}>
        {(item) => {
          const active = () => isNavActive(item, location.pathname)
          const Icon = NAV_ICONS[item.key]
          return (
            <button
              type="button"
              onClick={() => navigate(item.path)}
              class="flex-1 flex flex-col items-center gap-0.75 bg-transparent border-none py-1"
              classList={{
                "text-primary": active(),
                "text-muted-foreground": !active(),
              }}
            >
              <span class="w-[19px] h-[19px] flex">
                <Icon size={19} />
              </span>
              <span class="text-[9.5px] font-semibold">{item.label}</span>
            </button>
          )
        }}
      </For>
    </nav>
  )
}

export default MobileNav
