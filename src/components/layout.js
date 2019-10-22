import React from "react"
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import { Helmet } from "react-helmet"

export default ({ title, style, children, navbarClassname }) => (
  <div style={style}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Coverflex{title ? " | " + title : ""}</title>
      <link rel="canonical" href="http://coverflex.com" />
    </Helmet>
    <Nav className={navbarClassname}/>
    {children}
    <Footer />
  </div>
)
