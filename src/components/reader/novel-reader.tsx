import { For } from "solid-js"
import { useNavigate } from "@solidjs/router"

import { IconBack, IconBookmark } from "@/components/icons"
import NovelSettingsPanel from "@/components/reader/novel-settings-panel"
import type { Work } from "@/data/types"
import {
  NOVEL_PARAGRAPHS,
  bookmarked,
  novelFontSize,
  novelPalette,
  novelTheme,
  toggleBookmark,
  toggleNovelPanel,
} from "@/stores/reader"

const NovelReader = (props: { work: Work }) => {
  const navigate = useNavigate()
  const back = () => navigate(`/work/${props.work.id}`)
  const p = () => novelPalette(novelTheme())

  return (
    <div class="absolute inset-0 flex flex-col" style={{ background: p().bg }}>
      <div
        class="flex-none h-[52px] flex items-center gap-3 px-4 border-b"
        style={{ "border-color": p().border, color: p().text }}
      >
        <button type="button" onClick={back} class="border-none bg-transparent flex" style={{ color: p().text }}>
          <IconBack />
        </button>
        <div class="text-[13px] font-semibold">{props.work.title}</div>
        <div class="flex-1" />
        <button
          type="button"
          onClick={toggleBookmark}
          class="border-none bg-transparent flex"
          style={{ color: p().text }}
        >
          <IconBookmark
            size={17}
            fill={bookmarked() ? "var(--primary)" : "none"}
          />
        </button>
        <button
          type="button"
          onClick={toggleNovelPanel}
          class="border bg-transparent rounded-[7px] px-3 py-1.5 text-xs"
          style={{ "border-color": p().border, color: p().text }}
        >
          Aa
        </button>
      </div>

      <div class="flex-1 overflow-y-auto flex justify-center">
        <div
          class="max-w-[560px] w-full p-[48px_24px_80px]"
          style={{
            "font-family": "var(--font-serif)",
            color: p().text,
            "font-size": `${novelFontSize()}px`,
            "line-height": "1.75",
          }}
        >
          <div
            class="text-[11px] tracking-[0.08em] uppercase mb-4.5"
            style={{ color: p().textMuted, "font-family": "var(--font-sans)" }}
          >
            {props.work.chapterHeader}
          </div>
          <For each={NOVEL_PARAGRAPHS}>
            {(para, i) => (
              <p classList={{ "mb-5": i() < NOVEL_PARAGRAPHS.length - 1, "m-0": i() === NOVEL_PARAGRAPHS.length - 1 }}>
                {para}
              </p>
            )}
          </For>
        </div>
      </div>

      <NovelSettingsPanel />
    </div>
  )
}

export default NovelReader
