import React from "react"
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"

export default ({ style, children, navbarClassname }) => (
  <div style={style}>
    <Nav className={navbarClassname}/>
    {children}
    <Footer />
  </div>
)
