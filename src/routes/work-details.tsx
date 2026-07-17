import { For, Show } from "solid-js"
import { useNavigate, useParams } from "@solidjs/router"

import { IconBack } from "@/components/icons"
import ChapterList from "@/components/work/chapter-list"
import TypeBadge from "@/components/work/type-badge"
import { folderNameOf, getWork } from "@/data/library"

const WorkDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const work = () => getWork(Number(params.id))

  return (
    <Show
      when={work()}
      fallback={
        <div class="p-8 text-muted-foreground">Obra não encontrada.</div>
      }
    >
      {(w) => (
        <div class="p-[18px_16px] md:p-[28px_32px] max-w-[820px]">
          <button
            type="button"
            onClick={() => navigate("/")}
            class="flex items-center gap-1.5 border-none bg-transparent text-muted-foreground text-[13px] mb-4.5"
          >
            <IconBack size={15} />
            Voltar
          </button>

          <div class="flex gap-6 flex-wrap">
            <div class="cover-stripe w-[180px] flex-none aspect-[2/3] rounded-xl flex items-center justify-center">
              <span class="font-mono text-[11px] text-muted-foreground">capa</span>
            </div>

            <div class="flex-1 min-w-[240px]">
              <TypeBadge
                type={w().type}
                class="text-[11px] font-bold tracking-[0.05em] px-1.75 py-0.5 rounded inline-block mb-2.5"
              />
              <h1 class="m-0 mb-1.5 text-[26px] font-bold tracking-[-0.01em]">
                {w().title}
              </h1>
              <div class="text-[13px] text-muted-foreground mb-3.5">
                {w().sourceName} · {folderNameOf(w())}
              </div>
              <p class="text-sm leading-[1.6] text-muted-foreground max-w-[520px] m-0 mb-4.5">
                {w().synopsis}
              </p>

              <div class="flex gap-2 flex-wrap mb-5">
                <For each={w().tagList}>
                  {(tag) => (
                    <span class="text-[11px] px-2.25 py-1 rounded-md bg-surface-2 text-muted-foreground">
                      {tag}
                    </span>
                  )}
                </For>
              </div>

              <button
                type="button"
                onClick={() => navigate(`/work/${w().id}/read`)}
                class="bg-primary text-primary-foreground border-none rounded-[9px] px-5 py-2.75 text-sm font-semibold"
              >
                Continuar leitura
              </button>
            </div>
          </div>

          <ChapterList header={w().chapterHeader} chapters={w().chapters} />
        </div>
      )}
    </Show>
  )
}

export default WorkDetails
