import { Show } from "solid-js"

import { IconSearch } from "@/components/icons"
import Brand from "@/components/layout/brand"
import { useIsMobile } from "@/hooks/use-mobile"

/** Content-column header. Slightly shorter than the sidebar brand block so the
 * junction reads as a clean cut between sidebar and header. Desktop shows only
 * search; mobile (no sidebar) shows the brand instead. */
const TopBar = () => {
  const isMobile = useIsMobile()

  return (
    <header class="flex-none h-[56px] flex items-center gap-3 px-4 border-b border-border">
      <Show when={isMobile()} fallback={
        <div class="flex-1 max-w-[460px] flex items-center gap-2 bg-surface-2 rounded-[9px] px-3 py-2 text-muted-foreground transition-colors hover:bg-surface-2/70 focus-within:ring-2 focus-within:ring-ring/40">
          <IconSearch size={15} />
          <span class="text-[13px]">Buscar na biblioteca</span>
        </div>
      }>
        <Brand />
      </Show>
    </header>
  )
}

export default TopBar
