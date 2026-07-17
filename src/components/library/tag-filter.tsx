import { For } from "solid-js"

import { cx } from "@/lib/cva"
import { TAGS } from "@/data/library"
import { activeTag, toggleTag } from "@/stores/library"

const TagFilter = () => {
  return (
    <div class="flex gap-2 my-3.5 mb-5 flex-wrap">
      <For each={TAGS}>
        {(tag) => {
          const active = () => activeTag() === tag
          return (
            <button
              type="button"
              onClick={() => toggleTag(tag)}
              class={cx(
                "px-3 py-1.5 rounded-full border text-xs font-semibold transition-colors",
                active()
                  ? "border-primary bg-accent-soft text-primary"
                  : "border-border bg-transparent text-muted-foreground hover:border-primary/50",
              )}
            >
              {tag}
            </button>
          )
        }}
      </For>
    </div>
  )
}

export default TagFilter
