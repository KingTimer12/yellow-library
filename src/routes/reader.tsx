import { Show } from "solid-js"
import { useParams } from "@solidjs/router"

import MangaReader from "@/components/reader/manga-reader"
import NovelReader from "@/components/reader/novel-reader"
import { getWork } from "@/data/library"

/** Full-screen reader (no app chrome). Picks the reader by work type. */
const Reader = () => {
  const params = useParams()
  const work = () => getWork(Number(params.id))

  return (
    <div class="h-screen relative overflow-hidden">
      <Show
        when={work()}
        fallback={
          <div class="p-8 text-muted-foreground">Obra não encontrada.</div>
        }
      >
        {(w) => (
          <Show when={w().type === "manga"} fallback={<NovelReader work={w()} />}>
            <MangaReader work={w()} />
          </Show>
        )}
      </Show>
    </div>
  )
}

export default Reader
