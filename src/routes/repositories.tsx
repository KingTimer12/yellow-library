import { For } from "solid-js"

import { IconRepository } from "@/components/icons"
import SectionCard from "@/components/section-card"
import { REPOSITORIES } from "@/data/extensions"

const Repositories = () => {
  return (
    <div class="p-[18px_16px] md:p-[28px_32px]">
      <h1 class="m-0 mb-1 text-[22px] font-bold tracking-[-0.01em]">
        Repositórios
      </h1>
      <p class="m-0 mb-5 text-[13px] text-muted-foreground">
        Um repositório é um índice de extensões. Adicione a URL de um repositório
        para liberar suas fontes na tela de Extensões.
      </p>

      <SectionCard title="Adicionar repositório" class="mb-5">
        <div class="flex flex-col sm:flex-row gap-2">
          <input
            placeholder="https://exemplo.dev/repositorio.json"
            class="flex-1 border border-border bg-surface-2 text-foreground rounded-[9px] px-3 py-2.5 text-[13px] outline-none transition-colors focus:border-ring"
          />
          <button
            type="button"
            class="bg-primary text-primary-foreground border-none rounded-[9px] px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-200 hover:bg-primary/90 active:scale-95"
          >
            Adicionar
          </button>
        </div>
      </SectionCard>

      <div class="text-xs font-bold tracking-[0.03em] uppercase text-muted-foreground mb-2.5">
        {REPOSITORIES.length} repositórios
      </div>

      <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-start">
        <For each={REPOSITORIES}>
          {(repo) => (
            <div class="group flex flex-col gap-3 p-4 border border-border rounded-xl bg-surface transition-all duration-200 hover:border-primary/40 hover:shadow-md">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-accent-soft text-primary flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <IconRepository size={18} />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-semibold truncate">{repo.name}</div>
                  <div class="text-[11.5px] text-muted-foreground truncate">
                    {repo.url}
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between pt-3 border-t border-border">
                <div class="flex gap-4 text-[11.5px] text-muted-foreground">
                  <span>
                    <span class="font-semibold text-foreground">
                      {repo.count}
                    </span>{" "}
                    extensões
                  </span>
                  <span>{repo.updated}</span>
                </div>
                <button
                  type="button"
                  class="border border-border bg-transparent text-muted-foreground rounded-[7px] px-3 py-1.5 text-[12px] transition-colors hover:border-destructive hover:text-destructive active:scale-95"
                >
                  Remover
                </button>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

export default Repositories
