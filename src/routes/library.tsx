import { For, Show } from "solid-js"

import FolderChips from "@/components/library/folder-chips"
import TagFilter from "@/components/library/tag-filter"
import WorkCard from "@/components/library/work-card"
import { useIsMobile } from "@/hooks/use-mobile"
import { activeFolderName, visibleWorks } from "@/stores/library"

const Library = () => {
  const isMobile = useIsMobile()

  return (
    <div class="p-[18px_16px] md:p-[28px_32px]">
      <Show when={isMobile()}>
        <FolderChips />
      </Show>

      <div class="flex items-baseline justify-between mb-1">
        <h1 class="m-0 text-[22px] font-bold tracking-[-0.01em]">
          {activeFolderName()}
        </h1>
        <span class="text-xs text-muted-foreground">
          {visibleWorks().length} obras
        </span>
      </div>

      <TagFilter />

      <div class="grid grid-cols-2 md:grid-cols-5 gap-3.5 md:gap-5">
        <For each={visibleWorks()}>{(w) => <WorkCard work={w} />}</For>
      </div>
    </div>
  )
}

export default Library
