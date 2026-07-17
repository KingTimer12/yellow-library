/** App logo mark + wordmark. Used in the sidebar header (desktop) and the
 * top bar (mobile, where the sidebar is hidden). */
const Brand = () => {
  return (
    <div class="flex items-center gap-2.5 select-none">
      <div class="w-[26px] h-[26px] rounded-[8px] bg-primary text-primary-foreground flex items-center justify-center text-[13px] font-bold tracking-[-0.03em]">
        YL
      </div>
      <div class="font-bold text-[15px] tracking-[-0.02em]">Yellow Library</div>
    </div>
  )
}

export default Brand
