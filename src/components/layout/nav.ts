import { NAV_ICONS } from "@/components/icons"

export interface NavItem {
  key: keyof typeof NAV_ICONS
  label: string
  path: string
}

export const NAV_ITEMS: NavItem[] = [
  { key: "library", label: "Biblioteca", path: "/" },
  { key: "extensions", label: "Extensões", path: "/extensions" },
  { key: "repositories", label: "Repositórios", path: "/repositories" },
  { key: "import", label: "Importar", path: "/import" },
  { key: "settings", label: "Configurações", path: "/settings" },
]

/** Library owns "/", work details and readers, so they all light the same tab. */
export const isNavActive = (item: NavItem, pathname: string): boolean => {
  if (item.key === "library")
    return pathname === "/" || pathname.startsWith("/work")
  return pathname.startsWith(item.path)
}
