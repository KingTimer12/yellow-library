import type { JSX } from "solid-js"

import SectionCard from "@/components/section-card"
import { cx } from "@/lib/cva"
import { isDark, setTheme } from "@/stores/theme"
import { folderManageCount } from "@/stores/library"
import { openFolderManager } from "@/stores/ui"

const segBtn = (active: boolean) =>
  cx(
    "px-3.5 py-1.5 rounded-md border-none text-[12.5px] font-semibold transition-all duration-200 active:scale-95",
    active
      ? "bg-surface text-foreground shadow-sm"
      : "bg-transparent text-muted-foreground hover:text-foreground",
  )

/** One label + control row, divided from the next. */
const Row = (props: { label: string; children: JSX.Element; last?: boolean }) => (
  <div
    class={cx(
      "flex items-center justify-between gap-3 py-3",
      !props.last && "border-b border-border",
    )}
  >
    <span class="text-[13.5px]">{props.label}</span>
    {props.children}
  </div>
)

const Settings = () => {
  return (
    <div class="p-[18px_16px] md:p-[28px_32px]">
      <h1 class="m-0 mb-5 text-[22px] font-bold tracking-[-0.01em]">
        Configurações
      </h1>

      <div class="grid gap-4 md:grid-cols-2 2xl:grid-cols-4 items-start">
        <SectionCard title="Aparência">
          <Row label="Tema do aplicativo">
            <div class="flex bg-surface-2 rounded-lg p-0.5">
              <button type="button" onClick={() => setTheme("light")} class={segBtn(!isDark())}>
                Claro
              </button>
              <button type="button" onClick={() => setTheme("dark")} class={segBtn(isDark())}>
                Escuro
              </button>
            </div>
          </Row>
          <Row label="Tamanho da capa">
            <span class="text-[12.5px] text-muted-foreground">Médio</span>
          </Row>
          <Row label="Animações" last>
            <span class="text-[12.5px] text-muted-foreground">
              Padrão do sistema
            </span>
          </Row>
        </SectionCard>

        <SectionCard title="Leitura padrão">
          <Row label="Modo de leitura de mangá">
            <span class="text-[12.5px] text-muted-foreground">Página única</span>
          </Row>
          <Row label="Direção de leitura">
            <span class="text-[12.5px] text-muted-foreground">
              Esquerda → direita
            </span>
          </Row>
          <Row label="Tema de leitura de novel" last>
            <span class="text-[12.5px] text-muted-foreground">Claro</span>
          </Row>
        </SectionCard>

        <SectionCard title="Organização">
          <Row label={`Pastas (${folderManageCount()})`}>
            <button
              type="button"
              onClick={openFolderManager}
              class="border border-border bg-transparent text-foreground rounded-[7px] px-3 py-1.5 text-[12.5px] transition-all duration-200 hover:border-primary hover:text-primary active:scale-95"
            >
              Gerenciar
            </button>
          </Row>
          <Row label="Ordenar biblioteca por">
            <span class="text-[12.5px] text-muted-foreground">
              Adicionado recentemente
            </span>
          </Row>
          <Row label="Sincronização" last>
            <span class="text-[12.5px] text-muted-foreground">Local</span>
          </Row>
        </SectionCard>

        <SectionCard title="Sobre">
          <Row label="Versão">
            <span class="text-[12.5px] text-muted-foreground">
              Yellow Library 0.1.0
            </span>
          </Row>
          <Row label="Armazenamento usado">
            <span class="text-[12.5px] text-muted-foreground">128 MB</span>
          </Row>
          <Row label="Extensões ativas" last>
            <span class="text-[12.5px] text-muted-foreground">2</span>
          </Row>
        </SectionCard>
      </div>
    </div>
  )
}

export default Settings
