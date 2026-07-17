import type { Folder, Work, WorkType } from "./types"

export const FOLDERS: Folder[] = [
  { id: "all", name: "Todas as obras", count: 6 },
  { id: "sci", name: "Artigos científicos", count: 2 },
  { id: "romance", name: "Romance", count: 2 },
  { id: "acao", name: "Ação", count: 2 },
]

export const TAGS = ["Favoritos", "Em dia", "Pendente", "PDF", "EPUB"]

/** Per-type badge label + color (design uses raw oklch swatches). */
export const TYPE_META: Record<WorkType, { label: string; color: string }> = {
  manga: { label: "MANGÁ", color: "oklch(58% 0.14 45)" },
  novel: { label: "NOVEL", color: "oklch(55% 0.1 260)" },
  pdf: { label: "PDF", color: "oklch(50% 0.02 80)" },
}

export const WORKS: Work[] = [
  {
    id: 1,
    title: "Blade of Dawn",
    type: "manga",
    source: "ext",
    sourceName: "TatakaiScan",
    folder: "acao",
    progress: 0.6,
    tagList: ["Favoritos"],
    synopsis:
      "Um espadachim exilado retorna à capital para desfazer o golpe que o baniu, capítulo após capítulo de duelos e conspirações palacianas.",
    chapterHeader: "Capítulos",
    chapters: [
      { label: "Cap. 42 — A Lâmina Silenciosa", meta: "12 min", read: true },
      { label: "Cap. 41 — Portões de Ferro", meta: "14 min", read: true },
      { label: "Cap. 40 — Cinzas do Norte", meta: "11 min", read: false },
    ],
  },
  {
    id: 2,
    title: "Notas sobre Redes Neurais Convolucionais",
    type: "pdf",
    source: "import",
    sourceName: "Importado · PDF",
    folder: "sci",
    progress: 0.2,
    tagList: ["PDF", "Pendente"],
    synopsis:
      "Artigo importado localmente cobrindo arquiteturas convolucionais clássicas e variações modernas de pooling.",
    chapterHeader: "Seções",
    chapters: [
      { label: "1. Introdução", meta: "3 pág.", read: true },
      { label: "2. Arquiteturas", meta: "9 pág.", read: false },
      { label: "3. Resultados", meta: "6 pág.", read: false },
    ],
  },
  {
    id: 3,
    title: "O Jardim de Vidro",
    type: "novel",
    source: "import",
    sourceName: "Importado · EPUB",
    folder: "romance",
    progress: 1,
    tagList: ["EPUB", "Em dia"],
    synopsis:
      "Uma correspondência entre dois jardineiros rivais se transforma, carta a carta, em algo que nenhum dos dois esperava.",
    chapterHeader: "Capítulos",
    chapters: [
      { label: "Cap. 18 — Última Colheita", meta: "8 min", read: true },
      { label: "Cap. 17 — Estufa Vazia", meta: "7 min", read: true },
    ],
  },
  {
    id: 4,
    title: "Crônicas de Kaelthorn",
    type: "novel",
    source: "ext",
    sourceName: "NovelHub",
    folder: "romance",
    progress: 0.4,
    tagList: [],
    synopsis:
      "Uma saga de fantasia política em um reino dividido por três casas que disputam o trono de vidro.",
    chapterHeader: "Capítulos",
    chapters: [
      { label: "Cap. 9 — O Trono de Vidro", meta: "10 min", read: false },
      { label: "Cap. 8 — Juramentos", meta: "9 min", read: true },
    ],
  },
  {
    id: 5,
    title: "Distortion//Zero",
    type: "manga",
    source: "ext",
    sourceName: "MangaTide",
    folder: "acao",
    progress: 0,
    tagList: ["Favoritos"],
    synopsis:
      "Em uma cidade onde a gravidade falha em zonas aleatórias, uma equipe de recuperação enfrenta anomalias cada vez mais hostis.",
    chapterHeader: "Capítulos",
    chapters: [{ label: "Cap. 3 — Zona Cega", meta: "13 min", read: false }],
  },
  {
    id: 6,
    title: "Aprendizado por Reforço: uma revisão",
    type: "pdf",
    source: "import",
    sourceName: "Importado · PDF",
    folder: "sci",
    progress: 0,
    tagList: ["PDF"],
    synopsis:
      "Revisão comparando métodos de aprendizado por reforço profundo e suas aplicações em controle.",
    chapterHeader: "Seções",
    chapters: [{ label: "1. Introdução", meta: "4 pág.", read: false }],
  },
]

export const getWork = (id: number): Work | undefined =>
  WORKS.find((w) => w.id === id)

export const getFolder = (id: string): Folder | undefined =>
  FOLDERS.find((f) => f.id === id)

export const folderNameOf = (work: Work): string =>
  getFolder(work.folder)?.name ?? ""
