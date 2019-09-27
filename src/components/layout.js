import React from "react"
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"

export default ({ style, children }) => (
  <div style={style}>
    <Nav />
    {children}
    <Footer />
  </div>
)
