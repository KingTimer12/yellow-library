import type { JSX } from "solid-js"

import type { Extension } from "@/data/types"

/** Extension card: avatar + name/meta, with action controls passed as children. */
const ExtensionRow = (props: { ext: Extension; children: JSX.Element }) => {
  return (
    <div class="flex items-center gap-3 px-3.5 py-3 border border-border rounded-[10px]">
      <div class="w-[38px] h-[38px] rounded-[9px] bg-surface-2 flex items-center justify-center text-xs font-bold text-muted-foreground">
        {props.ext.initials}
      </div>
      <div class="flex-1 min-w-0">
        <div class="text-sm font-semibold">{props.ext.name}</div>
        <div class="text-[11.5px] text-muted-foreground">{props.ext.meta}</div>
      </div>
      {props.children}
    </div>
  )
}

export default ExtensionRow
