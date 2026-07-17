import type { JSX } from "solid-js"
import { Show } from "solid-js"

import { cx } from "@/lib/cva"

/** Bordered surface card with an optional uppercase section title. */
const SectionCard = (props: {
  title?: string
  children: JSX.Element
  class?: string
}) => {
  return (
    <section
      class={cx(
        "rounded-xl border border-border bg-surface p-5 shadow-sm transition-colors",
        props.class,
      )}
    >
      <Show when={props.title}>
        <div class="text-xs font-bold tracking-[0.03em] uppercase text-muted-foreground mb-3">
          {props.title}
        </div>
      </Show>
      {props.children}
    </section>
  )
}

export default SectionCard
