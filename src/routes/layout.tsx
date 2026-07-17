import { Show } from "solid-js"
import { useLocation } from "@solidjs/router"
import type { RouteSectionProps } from "@solidjs/router"

import AppSidebar from "@/components/app-sidebar"
import TopBar from "@/components/layout/top-bar"
import Titlebar from "@/components/layout/titlebar"
import MobileNav from "@/components/layout/mobile-nav"
import FolderManager from "@/components/layout/folder-manager"
import { useIsMobile } from "@/hooks/use-mobile"
import { isTauri } from "@/lib/window"

const Layout = (props: RouteSectionProps) => {
  const isMobile = useIsMobile()
  const location = useLocation()

  return (
    <div class="h-screen flex flex-col bg-background text-foreground overflow-hidden">
      {/* custom window titlebar (native decorations disabled) — desktop app only */}
      <Show when={isTauri}>
        <Titlebar />
      </Show>

      <div class="flex-1 min-h-0 flex">
        {/* full-height sidebar column (owns the top-left brand) */}
        <Show when={!isMobile()}>
          <AppSidebar />
        </Show>

        {/* content column: header + scrolling page + mobile nav */}
        <div class="flex-1 min-w-0 flex flex-col">
          <TopBar />

          <div class="flex-1 min-h-0 overflow-y-auto relative">
            {/* keyed on route so the enter animation replays on each navigation */}
            <Show when={location.pathname} keyed>
              <div class="page-enter">{props.children}</div>
            </Show>
            <FolderManager />
          </div>

          <Show when={isMobile()}>
            <MobileNav />
          </Show>
        </div>
      </div>
    </div>
  )
}

export default Layout
