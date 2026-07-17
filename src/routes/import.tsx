import { For } from "solid-js"

import { IconImport } from "@/components/icons"
import { FOLDERS } from "@/data/library"
import { IMPORT_BADGE_COLOR, RECENT_IMPORTS } from "@/data/extensions"

const ImportFile = () => {
  return (
    <div class="p-[18px_16px] md:p-[28px_32px] max-w-[680px]">
      <h1 class="m-0 mb-1 text-[22px] font-bold tracking-[-0.01em]">
        Importar arquivo
      </h1>
      <p class="m-0 mb-4.5 text-[13px] text-muted-foreground">
        Adicione PDFs, EPUBs ou CBZs direto do seu computador.
      </p>

      <div class="border-[1.5px] border-dashed border-border rounded-[14px] p-[36px_20px] flex flex-col items-center gap-2.5 mb-5.5 bg-surface-2">
        <IconImport size={26} class="text-muted-foreground" />
        <div class="text-[13.5px] font-semibold">Arraste arquivos aqui</div>
        <div class="text-xs text-muted-foreground">PDF, EPUB ou CBZ · ou</div>
        <button
          type="button"
          class="bg-primary text-primary-foreground border-none rounded-lg px-4 py-2.25 text-[13px] font-semibold"
        >
          Escolher arquivo
        </button>
      </div>

      <div class="flex flex-col gap-3.5 mb-6">
        <div>
          <div class="text-xs font-semibold text-muted-foreground mb-1.5">
            Pasta de destino
          </div>
          <select class="w-full border border-border bg-surface text-foreground rounded-[9px] px-3 py-2.25 text-[13px] outline-none focus:border-ring">
            <For each={FOLDERS}>{(f) => <option>{f.name}</option>}</For>
          </select>
        </div>
        <div>
          <div class="text-xs font-semibold text-muted-foreground mb-1.5">
            Tags
          </div>
          <input
            placeholder="ex: PDF, Pendente"
            class="w-full border border-border bg-surface text-foreground rounded-[9px] px-3 py-2.25 text-[13px] outline-none focus:border-ring"
          />
        </div>
      </div>

      <div class="text-xs font-bold tracking-[0.03em] uppercase text-muted-foreground mb-2">
        Importados recentemente
      </div>
      <div class="flex flex-col gap-2">
        <For each={RECENT_IMPORTS}>
          {(ri) => (
            <div class="flex items-center gap-2.5 px-3 py-2.5 border border-border rounded-[9px]">
              <div
                class="text-[9px] font-bold px-1.5 py-0.5 rounded"
                style={{
                  background: IMPORT_BADGE_COLOR[ri.kind],
                  color: "white",
                }}
              >
                {ri.kind}
              </div>
              <div class="flex-1 text-[13px] font-medium">{ri.name}</div>
              <div class="text-[11.5px] text-muted-foreground">{ri.folder}</div>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

export default ImportFile
