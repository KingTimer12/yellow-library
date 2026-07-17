import type { JSX } from "solid-js"

import { TYPE_META } from "@/data/library"
import type { WorkType } from "@/data/types"

interface TypeBadgeProps {
  type: WorkType
  class?: string
  style?: JSX.CSSProperties
}

/** Colored MANGÁ / NOVEL / PDF pill. Color comes from the design swatches. */
const TypeBadge = (props: TypeBadgeProps) => {
  const meta = () => TYPE_META[props.type]
  return (
    <span
      class={props.class}
      style={{ background: meta().color, color: "white", ...props.style }}
    >
      {meta().label}
    </span>
  )
}

export default TypeBadge
