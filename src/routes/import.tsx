import { For } from "solid-js"

import { IconImport } from "@/components/icons"
import SectionCard from "@/components/section-card"
import { FOLDERS } from "@/data/library"
import { IMPORT_BADGE_COLOR, RECENT_IMPORTS } from "@/data/extensions"

const fieldClass =
  "w-full border border-border bg-surface-2 text-foreground rounded-[9px] px-3 py-2.5 text-[13px] outline-none transition-colors focus:border-ring"

const ImportFile = () => {
  return (
    <div class="p-[18px_16px] md:p-[28px_32px]">
      <h1 class="m-0 mb-1 text-[22px] font-bold tracking-[-0.01em]">
        Importar arquivo
      </h1>
      <p class="m-0 mb-5 text-[13px] text-muted-foreground">
        Adicione PDFs, EPUBs, CBZs ou um .zip com todos os capítulos.
      </p>

      <div class="grid gap-4 lg:grid-cols-3 items-stretch">
        {/* dropzone hero */}
        <button
          type="button"
          class="group lg:col-span-2 border-[1.5px] border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center gap-3 bg-surface-2 min-h-[280px] transition-colors duration-200 hover:border-primary/60 hover:bg-accent-soft/40"
        >
          <div class="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-muted-foreground shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-primary">
            <IconImport size={26} />
          </div>
          <div class="text-[15px] font-semibold">Arraste arquivos aqui</div>
          <div class="text-xs text-muted-foreground">PDF, EPUB, CBZ ou ZIP</div>
          <span class="mt-1 bg-primary text-primary-foreground rounded-lg px-4 py-2.25 text-[13px] font-semibold shadow-sm transition-all duration-200 group-hover:bg-primary/90 group-hover:-translate-y-0.5 group-hover:shadow-md">
            Escolher arquivo
          </span>
          <div class="text-[11px] text-muted-foreground text-center max-w-[360px] mt-1">
            Envie um .zip para importar uma obra inteira — cada arquivo interno
            vira um capítulo.
          </div>
        </button>

        {/* details sidebar */}
        <div class="flex flex-col gap-4">
          <SectionCard title="Capa (opcional)" class="flex-1">
            <div class="flex items-start gap-3.5">
              <button
                type="button"
                class="cover-stripe group w-[92px] flex-none aspect-[2/3] rounded-[10px] border border-dashed border-border flex flex-col items-center justify-center gap-1 text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-1 hover:shadow-md"
              >
                <IconImport size={18} />
                <span class="text-[10.5px] font-semibold">Enviar</span>
              </button>
              <div class="text-[12px] text-muted-foreground leading-[1.6]">
                <div class="font-semibold text-foreground mb-0.5">
                  600 × 900 px
                </div>
                <div>Proporção 2:3, igual às capas.</div>
                <div>JPG, PNG ou WebP · até 2 MB.</div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Detalhes">
            <div class="flex flex-col gap-3.5">
              <div>
                <div class="text-xs font-semibold text-muted-foreground mb-1.5">
                  Pasta de destino
                </div>
                <select class={fieldClass}>
                  <For each={FOLDERS}>{(f) => <option>{f.name}</option>}</For>
                </select>
              </div>
              <div>
                <div class="text-xs font-semibold text-muted-foreground mb-1.5">
                  Tags
                </div>
                <input placeholder="ex: PDF, Pendente" class={fieldClass} />
              </div>
            </div>
          </SectionCard>
        </div>
      </div>

      <SectionCard title="Importados recentemente" class="mt-4">
        <div class="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
          <For each={RECENT_IMPORTS}>
            {(ri) => (
              <div class="flex items-center gap-2.5 px-3 py-2.5 border border-border rounded-[9px] bg-surface-2 transition-colors hover:border-primary/30">
                <div
                  class="text-[9px] font-bold px-1.5 py-0.5 rounded"
                  style={{
                    background: IMPORT_BADGE_COLOR[ri.kind],
                    color: "white",
                  }}
                >
                  {ri.kind}
                </div>
                <div class="flex-1 min-w-0 text-[13px] font-medium truncate">
                  {ri.name}
                </div>
                <div class="text-[11.5px] text-muted-foreground flex-none">
                  {ri.folder}
                </div>
              </div>
            )}
          </For>
        </div>
      </SectionCard>
    </div>
  )
}

export default ImportFile
