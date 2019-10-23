import React from "react"
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import { Helmet } from "react-helmet"
import favicon16 from "../images/favicon16.png"
import favicon32 from "../images/favicon32.png"

export default ({ title, children, navbarClassname }) => (
  <div className="layout">
    <Helmet
      link={[
        { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon16}` },
        { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` },
        { rel: "shortcut icon", type: "image/png", href: `${favicon32}` },
      ]}
      bodyAttributes={{
        class: 'has-navbar-fixed-top',
      }}
    >
      <meta charSet="utf-8" />
      <title>Coverflex{title ? " | " + title : ""}</title>
      <link rel="canonical" href="http://coverflex.com" />
    </Helmet>
    <Nav className={navbarClassname}/>
    {children}
    <Footer />
  </div>
)
