import { cx } from "@/lib/cva"

const ToggleSwitch = (props: { checked: boolean; onChange: () => void }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={props.checked}
      onClick={props.onChange}
      class={cx(
        "w-9 h-5 rounded-[10px] border-none relative p-0.5 flex-none transition-colors",
        props.checked ? "bg-primary" : "bg-surface-2",
      )}
    >
      <span
        class="block w-4 h-4 rounded-full bg-white transition-transform"
        classList={{ "translate-x-4": props.checked }}
      />
    </button>
  )
}

export default ToggleSwitch
