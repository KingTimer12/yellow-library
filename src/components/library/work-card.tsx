import { Show } from "solid-js"
import { useNavigate } from "@solidjs/router"

import TypeBadge from "@/components/work/type-badge"
import type { Work } from "@/data/types"

const WorkCard = (props: { work: Work; index?: number }) => {
  const navigate = useNavigate()
  const w = () => props.work
  const showProgress = () => w().progress > 0 && w().progress < 1

  return (
    <button
      type="button"
      onClick={() => navigate(`/work/${w().id}`)}
      class="card-enter group flex flex-col gap-2 text-left bg-transparent border-none p-0 text-inherit transition-transform duration-200 ease-out hover:-translate-y-1 active:scale-[0.98]"
      style={{ "animation-delay": `${(props.index ?? 0) * 45}ms` }}
    >
      <div class="cover-stripe relative aspect-[2/3] rounded-[9px] flex items-center justify-center overflow-hidden shadow-sm transition-shadow duration-200 group-hover:shadow-lg">
        <span class="font-mono text-[10px] text-muted-foreground opacity-80 transition-transform duration-300 ease-out group-hover:scale-110">
          capa
        </span>

        <Show when={showProgress()}>
          <div class="absolute left-0 right-0 bottom-0 h-[3px] bg-black/15">
            <div
              class="h-full bg-primary transition-[width] duration-500 ease-out"
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
        <div class="text-[13px] font-semibold leading-[1.3] mb-0.75 line-clamp-2 transition-colors group-hover:text-primary">
          {w().title}
        </div>
        <div class="text-[11px] text-muted-foreground">{w().sourceName}</div>
      </div>
    </button>
  )
}

export default WorkCard
