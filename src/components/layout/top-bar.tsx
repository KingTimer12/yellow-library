import { Show } from "solid-js"

import { IconMoon, IconSearch, IconSun } from "@/components/icons"
import { useIsMobile } from "@/hooks/use-mobile"
import { isDark, toggleTheme } from "@/stores/theme"

const TopBar = () => {
  const isMobile = useIsMobile()

  return (
    <header class="flex-none h-[54px] flex items-center gap-3 px-4.5 border-b border-border">
      <div class="flex items-center gap-2.5 select-none">
        <div class="w-[26px] h-[26px] rounded-[8px] bg-primary text-primary-foreground flex items-center justify-center text-[13px] font-bold tracking-[-0.03em]">
          YL
        </div>
        <div class="font-bold text-[15px] tracking-[-0.02em]">
          Yellow Library
        </div>
      </div>

      <Show when={!isMobile()}>
        <div class="flex-1 max-w-[420px] ml-3 flex items-center gap-2 bg-surface-2 rounded-[9px] px-3 py-1.75 text-muted-foreground transition-colors hover:bg-surface-2/70 focus-within:ring-2 focus-within:ring-ring/40">
          <IconSearch size={15} />
          <span class="text-[13px]">Buscar na biblioteca</span>
        </div>
      </Show>

      <div class="flex-1" />

      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Alternar tema"
        class="w-[30px] h-[30px] rounded-full border border-border bg-surface flex items-center justify-center text-foreground transition-all duration-200 hover:bg-surface-2 active:scale-90"
      >
        <Show when={!isDark()} fallback={<IconMoon size={15} />}>
          <IconSun size={15} />
        </Show>
      </button>

      <div class="w-[30px] h-[30px] rounded-full bg-accent-soft text-primary flex items-center justify-center text-xs font-semibold select-none">
        YL
      </div>
    </header>
  )
}

export default TopBar
