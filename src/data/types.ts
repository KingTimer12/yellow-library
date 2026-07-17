export type WorkType = "manga" | "novel" | "pdf"

export type WorkSource = "ext" | "import"

export interface Chapter {
  label: string
  meta: string
  read: boolean
}

export interface Work {
  id: number
  title: string
  type: WorkType
  source: WorkSource
  sourceName: string
  folder: string
  /** reading progress, 0..1 */
  progress: number
  tagList: string[]
  synopsis: string
  chapterHeader: string
  chapters: Chapter[]
}

export interface Folder {
  id: string
  name: string
  count: number
}

export interface Extension {
  id: string
  name: string
  meta: string
  initials: string
  enabled?: boolean
}

export interface ExtensionRepoGroup {
  repoName: string
  items: Extension[]
}

export interface Repository {
  name: string
  url: string
  count: number
  updated: string
}

export interface RecentImport {
  kind: string
  name: string
  folder: string
}
