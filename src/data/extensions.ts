import type {
  Extension,
  ExtensionRepoGroup,
  RecentImport,
  Repository,
} from "./types"

export const INSTALLED_EXTENSIONS: Extension[] = [
  { id: "e1", name: "MangaTide", meta: "v1.4.2 · PT-BR · mangá", initials: "MT", enabled: true },
  { id: "e2", name: "TatakaiScan", meta: "v2.0.1 · PT-BR · mangá", initials: "TS", enabled: true },
  { id: "e3", name: "NovelHub", meta: "v0.9.6 · EN · novel", initials: "NH", enabled: false },
]

export const AVAILABLE_EXTENSIONS: ExtensionRepoGroup[] = [
  {
    repoName: "Repositório Oficial",
    items: [
      { id: "a1", name: "ScanlateX", meta: "v3.1.0 · PT-BR · mangá", initials: "SX" },
      { id: "a2", name: "PageTurner", meta: "v1.2.0 · EN · novel", initials: "PT" },
    ],
  },
  {
    repoName: "Comunidade BR",
    items: [
      { id: "a3", name: "FansubReader", meta: "v0.5.4 · PT-BR · mangá", initials: "FR" },
    ],
  },
]

export const REPOSITORIES: Repository[] = [
  { name: "Repositório Oficial", url: "https://repo.exemplo.dev/index.json", count: 18, updated: "Há 2 dias" },
  { name: "Comunidade BR", url: "https://leitores-br.dev/repo.json", count: 34, updated: "Há 5 dias" },
]

export const RECENT_IMPORTS: RecentImport[] = [
  { kind: "PDF", name: "Redes Neurais Convolucionais.pdf", folder: "Artigos científicos" },
  { kind: "EPUB", name: "O Jardim de Vidro.epub", folder: "Romance" },
]

/** Badge color per import kind (design swatches). */
export const IMPORT_BADGE_COLOR: Record<string, string> = {
  PDF: "oklch(50% 0.02 80)",
  EPUB: "oklch(55% 0.1 260)",
  CBZ: "oklch(58% 0.14 45)",
  ZIP: "oklch(55% 0.12 150)",
}
