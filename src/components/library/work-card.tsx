import { Show } from "solid-js"
import { useNavigate } from "@solidjs/router"

import TypeBadge from "@/components/work/type-badge"
import type { Work } from "@/data/types"

const WorkCard = (props: { work: Work }) => {
  const navigate = useNavigate()
  const w = () => props.work
  const showProgress = () => w().progress > 0 && w().progress < 1

  return (
    <button
      type="button"
      onClick={() => navigate(`/work/${w().id}`)}
      class="flex flex-col gap-2 text-left bg-transparent border-none p-0 text-inherit"
    >
      <div class="cover-stripe relative aspect-[2/3] rounded-[9px] flex items-center justify-center overflow-hidden">
        <span class="font-mono text-[10px] text-muted-foreground opacity-80">
          capa
        </span>

        <Show when={showProgress()}>
          <div class="absolute left-0 right-0 bottom-0 h-[3px] bg-black/15">
            <div
              class="h-full bg-primary"
              style={{ width: `${w().progress * 100}%` }}
            />
          </div>
        </Show>

        <TypeBadge
          type={w().type}
          class="absolute top-1.5 left-1.5 text-[9px] font-bold tracking-[0.04em] px-1.5 py-0.5 rounded"
        />
      </div>

      <div>
        <div class="text-[13px] font-semibold leading-[1.3] mb-0.75 line-clamp-2">
          {w().title}
        </div>
        <div class="text-[11px] text-muted-foreground">{w().sourceName}</div>
      </div>
    </button>
  )
}

export default WorkCard
