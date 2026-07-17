import { For } from "solid-js"

import { IconRepository } from "@/components/icons"
import { REPOSITORIES } from "@/data/extensions"

const Repositories = () => {
  return (
    <div class="p-[18px_16px] md:p-[28px_32px] max-w-[680px]">
      <h1 class="m-0 mb-1 text-[22px] font-bold tracking-[-0.01em]">
        Repositórios
      </h1>
      <p class="m-0 mb-4.5 text-[13px] text-muted-foreground">
        Um repositório é um índice de extensões. Adicione a URL de um repositório
        para liberar suas fontes na tela de Extensões.
      </p>

      <div class="flex gap-2 mb-5">
        <input
          placeholder="https://exemplo.dev/repositorio.json"
          class="flex-1 border border-border bg-surface text-foreground rounded-[9px] px-3 py-2.5 text-[13px] outline-none focus:border-ring"
        />
        <button
          type="button"
          class="bg-primary text-primary-foreground border-none rounded-[9px] px-4 text-[13.5px] font-semibold"
        >
          Adicionar
        </button>
      </div>

      <div class="flex flex-col gap-2.5">
        <For each={REPOSITORIES}>
          {(repo) => (
            <div class="flex items-center gap-3 p-3.5 border border-border rounded-[10px]">
              <div class="w-9 h-9 rounded-lg bg-accent-soft text-primary flex items-center justify-center">
                <IconRepository size={16} />
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-semibold">{repo.name}</div>
                <div class="text-[11.5px] text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap">
                  {repo.url}
                </div>
              </div>
              <div class="text-xs text-muted-foreground text-right flex-none">
                <div>{repo.count} extensões</div>
                <div>{repo.updated}</div>
              </div>
              <button
                type="button"
                class="border border-border bg-transparent text-muted-foreground rounded-[7px] px-3 py-1.75 text-[12.5px]"
              >
                Remover
              </button>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

export default Repositories
