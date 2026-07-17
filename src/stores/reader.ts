import { createSignal } from "solid-js"

/* ---- manga reader ---- */

export type ReaderMode = "single" | "vertical" | "double"

export const READER_MODES: { key: ReaderMode; label: string }[] = [
  { key: "single", label: "Única" },
  { key: "vertical", label: "Vertical" },
  { key: "double", label: "Dupla" },
]

const [currentPage, setCurrentPage] = createSignal(12)
const [totalPages] = createSignal(34)
const [readerMode, setReaderMode] = createSignal<ReaderMode>("single")

export const nextPage = () =>
  setCurrentPage((p) => Math.min(totalPages(), p + 1))
export const prevPage = () => setCurrentPage((p) => Math.max(1, p - 1))
export const mangaProgress = () => (currentPage() / totalPages()) * 100

export { currentPage, totalPages, readerMode, setReaderMode }

/* ---- novel reader ---- */

export type NovelTheme = "light" | "sepia" | "dark"

export const NOVEL_SWATCHES: { key: NovelTheme; bg: string }[] = [
  { key: "light", bg: "#fdfcfa" },
  { key: "sepia", bg: "#e9dcc3" },
  { key: "dark", bg: "#26262a" },
]

const [novelTheme, setNovelTheme] = createSignal<NovelTheme>("light")
const [novelFontSize, setNovelFontSize] = createSignal(18)
const [bookmarked, setBookmarked] = createSignal(false)
const [panelOpen, setPanelOpen] = createSignal(false)

export const incFontSize = () =>
  setNovelFontSize((s) => Math.min(28, s + 1))
export const decFontSize = () =>
  setNovelFontSize((s) => Math.max(14, s - 1))
export const toggleBookmark = () => setBookmarked((b) => !b)
export const toggleNovelPanel = () => setPanelOpen((o) => !o)

export interface NovelPalette {
  bg: string
  text: string
  textMuted: string
  border: string
}

export const novelPalette = (t: NovelTheme): NovelPalette => {
  if (t === "dark")
    return {
      bg: "oklch(18% 0.006 80)",
      text: "oklch(90% 0.004 80)",
      textMuted: "oklch(60% 0.01 80)",
      border: "oklch(28% 0.008 80)",
    }
  if (t === "sepia")
    return {
      bg: "oklch(92% 0.02 75)",
      text: "oklch(28% 0.02 60)",
      textMuted: "oklch(48% 0.02 60)",
      border: "oklch(82% 0.02 70)",
    }
  return {
    bg: "oklch(99% 0.003 80)",
    text: "oklch(22% 0.01 80)",
    textMuted: "oklch(48% 0.012 80)",
    border: "oklch(90% 0.006 80)",
  }
}

export const NOVEL_PARAGRAPHS = [
  "A carta chegou numa terça-feira, dobrada quatro vezes, com terra ainda presa nas bordas.",
  "Ele não precisava abrir para saber de quem era — só ela escrevia com a caligrafia que parecia crescer, como se as letras fossem raízes procurando espaço.",
  "Leu duas vezes antes de decidir que responderia, e uma terceira antes de decidir o quê.",
]

export {
  novelTheme,
  setNovelTheme,
  novelFontSize,
  bookmarked,
  panelOpen,
}
