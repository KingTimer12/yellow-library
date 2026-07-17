import logoUrl from "@/assets/logo.svg"

/** App logo mark + wordmark. Used in the sidebar header (desktop) and the
 * top bar (mobile, where the sidebar is hidden). */
const Brand = () => {
  return (
    <div class="flex items-center gap-2.5 select-none">
      <img
        src={logoUrl}
        alt="Yellow Library"
        width={28}
        height={28}
        class="w-[28px] h-[28px] rounded-[7px]"
      />
      <div class="font-bold text-[15px] tracking-[-0.02em]">Yellow Library</div>
    </div>
  )
}

export default Brand
