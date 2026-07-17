import { Show } from "solid-js"
import { useLocation } from "@solidjs/router"
import type { RouteSectionProps } from "@solidjs/router"

import AppSidebar from "@/components/app-sidebar"
import TopBar from "@/components/layout/top-bar"
import MobileNav from "@/components/layout/mobile-nav"
import FolderManager from "@/components/layout/folder-manager"
import { useIsMobile } from "@/hooks/use-mobile"

const Layout = (props: RouteSectionProps) => {
  const isMobile = useIsMobile()
  const location = useLocation()

  return (
    <div class="h-screen flex flex-col bg-background text-foreground">
      <TopBar />

      <div class="flex-1 min-h-0 flex overflow-hidden">
        <Show when={!isMobile()}>
          <AppSidebar />
        </Show>

        <div class="flex-1 min-h-0 overflow-y-auto relative">
          {/* keyed on route so the enter animation replays on each navigation */}
          <Show when={location.pathname} keyed>
            <div class="page-enter">{props.children}</div>
          </Show>
          <FolderManager />
        </div>
      </div>

      <Show when={isMobile()}>
        <MobileNav />
      </Show>
    </div>
  )
}

export default Layout
