import React, { Fragment } from "react"
import { Header, Footer, Homepage, News, CurrentIssue, AdditionalContent } from "./containers"

function App() {

  return (
    < Fragment>
      < Header />
      <Homepage />
      <News />
      <CurrentIssue />
      <AdditionalContent />
      <Footer />
    </Fragment>
  )
}

export default App
