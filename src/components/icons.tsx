import type { Component, JSX } from "solid-js"

type IconProps = JSX.SvgSVGAttributes<SVGSVGElement> & { size?: number }

// `paths` MUST be a factory: it is invoked on every render so each icon
// instance gets its own DOM nodes. Sharing a single element would let Solid
// move those nodes when the same icon renders in two places at once
// (e.g. sidebar + page), blanking one of them.
const svg = (
  paths: () => JSX.Element,
  extra?: Partial<IconProps>,
): Component<IconProps> => {
  return (props) => {
    const size = () => props.size ?? 18
    return (
      <svg
        width={size()}
        height={size()}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...extra}
        {...props}
      >
        {paths()}
      </svg>
    )
  }
}

export const IconLibrary = svg(() => (
  <path d="M4 10l8-6 8 6v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" />
))

export const IconExtensions = svg(() => (
  <>
    <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0z" />
    <path d="M12 17v4" />
  </>
))

export const IconRepository = svg(() => (
  <>
    <path d="M12 3l9 5-9 5-9-5z" />
    <path d="M3 13l9 5 9-5" />
  </>
))

export const IconImport = svg(() => (
  <>
    <path d="M12 3v10m0 0l-4-4m4 4l4-4" />
    <path d="M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" />
  </>
))

export const IconSettings = svg(() => (
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
  </>
))

export const IconSearch = svg(() => (
  <>
    <circle cx="11" cy="11" r="6" />
    <path d="M20 20l-3.5-3.5" />
  </>
))

export const IconBack = svg(() => <path d="M19 12H5M11 6l-6 6 6 6" />)
export const IconChevronLeft = svg(() => <path d="M15 6l-6 6 6 6" />, { "stroke-width": "2" })
export const IconChevronRight = svg(() => <path d="M9 6l6 6-6 6" />, { "stroke-width": "2" })

export const IconSun = svg(() => (
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </>
))

export const IconMoon = svg(() => (
  <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
))

export const IconBookmark = svg(() => <path d="M6 3h12v18l-6-4-6 4z" />, { "stroke-width": "1.6" })

export const NAV_ICONS = {
  library: IconLibrary,
  extensions: IconExtensions,
  repositories: IconRepository,
  import: IconImport,
  settings: IconSettings,
} as const
