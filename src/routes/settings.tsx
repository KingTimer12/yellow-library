import { cx } from "@/lib/cva"
import { isDark, setTheme } from "@/stores/theme"
import { folderManageCount } from "@/stores/library"
import { openFolderManager } from "@/stores/ui"

const segBtn = (active: boolean) =>
  cx(
    "px-3.5 py-1.5 rounded-md border-none text-[12.5px] font-semibold transition-colors",
    active ? "bg-surface text-foreground shadow-sm" : "bg-transparent text-muted-foreground",
  )

const SectionLabel = (props: { children: string }) => (
  <div class="text-xs font-bold tracking-[0.03em] uppercase text-muted-foreground mb-2.5">
    {props.children}
  </div>
)

const Settings = () => {
  return (
    <div class="p-[18px_16px] md:p-[28px_32px] max-w-[640px]">
      <h1 class="m-0 mb-5 text-[22px] font-bold tracking-[-0.01em]">
        Configurações
      </h1>

      <div class="mb-6.5">
        <SectionLabel>Aparência</SectionLabel>
        <div class="flex items-center justify-between py-3 border-b border-border">
          <span class="text-[13.5px]">Tema do aplicativo</span>
          <div class="flex bg-surface-2 rounded-lg p-0.5">
            <button type="button" onClick={() => setTheme("light")} class={segBtn(!isDark())}>
              Claro
            </button>
            <button type="button" onClick={() => setTheme("dark")} class={segBtn(isDark())}>
              Escuro
            </button>
          </div>
        </div>
      </div>

      <div class="mb-6.5">
        <SectionLabel>Leitura padrão</SectionLabel>
        <div class="flex items-center justify-between py-3 border-b border-border">
          <span class="text-[13.5px]">Modo de leitura de mangá</span>
          <span class="text-[12.5px] text-muted-foreground">Página única</span>
        </div>
      </div>

      <div>
        <SectionLabel>Organização</SectionLabel>
        <div class="flex items-center justify-between py-3 border-b border-border">
          <span class="text-[13.5px]">Pastas ({folderManageCount()})</span>
          <button
            type="button"
            onClick={openFolderManager}
            class="border border-border bg-transparent text-foreground rounded-[7px] px-3 py-1.5 text-[12.5px]"
          >
            Gerenciar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings
