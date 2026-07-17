/* @refresh reload */
import "virtual:uno.css"
import "@/styles/theme.css"

import { render } from "solid-js/web"
import { Router, Route } from "@solidjs/router"

import Layout from "@/routes/layout"
import Library from "@/routes/library"
import WorkDetails from "@/routes/work-details"
import Extensions from "@/routes/extensions"
import Repositories from "@/routes/repositories"
import ImportFile from "@/routes/import"
import Settings from "@/routes/settings"
import Reader from "@/routes/reader"

render(
  () => (
    <Router>
      {/* app chrome: top bar + sidebar / bottom nav */}
      <Route component={Layout}>
        <Route path="/" component={Library} />
        <Route path="/work/:id" component={WorkDetails} />
        <Route path="/extensions" component={Extensions} />
        <Route path="/repositories" component={Repositories} />
        <Route path="/import" component={ImportFile} />
        <Route path="/settings" component={Settings} />
      </Route>

      {/* full-screen reader, no chrome */}
      <Route path="/work/:id/read" component={Reader} />
    </Router>
  ),
  document.getElementById("root") as HTMLElement,
)
