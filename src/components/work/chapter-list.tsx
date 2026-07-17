import { For } from "solid-js"

import type { Chapter } from "@/data/types"

const ChapterList = (props: { header: string; chapters: Chapter[] }) => {
  return (
    <div class="mt-8">
      <h2 class="text-sm font-bold tracking-[0.02em] uppercase text-muted-foreground mb-2.5">
        {props.header}
      </h2>
      <div class="border-t border-border">
        <For each={props.chapters}>
          {(c) => (
            <div class="group flex items-center justify-between py-3.25 px-2 -mx-1 rounded-md border-b border-border cursor-pointer transition-colors hover:bg-surface-2">
              <div class="flex items-center gap-2.5">
                <span
                  class="w-[7px] h-[7px] rounded-full flex-none"
                  classList={{
                    "bg-muted-foreground": c.read,
                    "bg-primary": !c.read,
                  }}
                />
                <span class="text-[13.5px] font-medium">{c.label}</span>
              </div>
              <span class="text-xs text-muted-foreground">{c.meta}</span>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

export default ChapterList
