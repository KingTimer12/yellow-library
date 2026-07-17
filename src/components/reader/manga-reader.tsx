import { For, Show } from "solid-js"
import { useNavigate } from "@solidjs/router"

import { IconBack, IconChevronLeft, IconChevronRight } from "@/components/icons"
import { cx } from "@/lib/cva"
import type { Work } from "@/data/types"
import {
  READER_MODES,
  currentPage,
  mangaProgress,
  nextPage,
  prevPage,
  readerMode,
  setReaderMode,
  totalPages,
} from "@/stores/reader"

const MangaReader = (props: { work: Work }) => {
  const navigate = useNavigate()
  const back = () => navigate(`/work/${props.work.id}`)

  return (
    <div class="absolute inset-0 flex flex-col" style={{ background: "#0b0b0c" }}>
      <div class="flex-none h-[52px] flex items-center gap-3 px-4 text-[#f2f0ec] bg-gradient-to-b from-black/60 to-transparent">
        <button
          type="button"
          onClick={back}
          class="border-none bg-transparent text-[#f2f0ec] flex transition-transform duration-200 hover:-translate-x-0.5 active:scale-90"
        >
          <IconBack />
        </button>
        <div class="text-[13px] font-semibold">{props.work.title}</div>
        <div class="text-xs text-white/55">· {props.work.chapters[0]?.label}</div>
      </div>

      <div class="flex-1 flex items-center justify-center relative">
        <button
          type="button"
          onClick={prevPage}
          class="absolute left-3.5 w-[38px] h-[38px] rounded-full bg-white/8 border-none text-[#f2f0ec] flex items-center justify-center transition-all duration-200 hover:bg-white/16 hover:scale-110 active:scale-90"
        >
          <IconChevronLeft size={16} />
        </button>

        <div
          class="w-[240px] md:w-[320px] aspect-[2/3] rounded-md flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          style={{
            background:
              "repeating-linear-gradient(135deg,#1c1c1e 0 10px,#171718 10px 20px)",
          }}
        >
          {/* keyed on page so each flip crossfades */}
          <Show when={currentPage()} keyed>
            <span class="anim-fade-in font-mono text-[11px] text-white/40">
              página {currentPage()}
            </span>
          </Show>
        </div>

        <button
          type="button"
          onClick={nextPage}
          class="absolute right-3.5 w-[38px] h-[38px] rounded-full bg-white/8 border-none text-[#f2f0ec] flex items-center justify-center transition-all duration-200 hover:bg-white/16 hover:scale-110 active:scale-90"
        >
          <IconChevronRight size={16} />
        </button>
      </div>

      <div class="flex-none p-[14px_18px_18px] bg-gradient-to-t from-black/60 to-transparent">
        <div class="flex items-center gap-3 mb-2.5">
          <span class="text-[11px] text-white/55 w-6">{currentPage()}</span>
          <div class="flex-1 h-[3px] bg-white/15 rounded-sm relative">
            <div
              class="absolute left-0 top-0 h-full bg-primary rounded-sm transition-[width] duration-300 ease-out"
              style={{ width: `${mangaProgress()}%` }}
            />
          </div>
          <span class="text-[11px] text-white/55 w-6 text-right">
            {totalPages()}
          </span>
        </div>

        <div class="flex justify-center gap-1 bg-white/6 rounded-[9px] p-0.75 w-fit mx-auto">
          <For each={READER_MODES}>
            {(m) => (
              <button
                type="button"
                onClick={() => setReaderMode(m.key)}
                class={cx(
                  "px-3.25 py-1.5 rounded-[7px] border-none text-[11.5px] font-semibold transition-all duration-200 active:scale-95",
                  readerMode() === m.key
                    ? "bg-white/16 text-white"
                    : "bg-transparent text-white/55 hover:text-white/80",
                )}
              >
                {m.label}
              </button>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}

export default MangaReader
