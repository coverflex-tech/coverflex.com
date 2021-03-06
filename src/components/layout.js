import React from "react"
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import { Helmet } from "react-helmet"
import favicon16 from "../images/favicon16.png"
import favicon32 from "../images/favicon32.png"
import { injectIntl } from "gatsby-plugin-intl"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', { speed: 200, offset: 10 })
}

export default injectIntl(({ intl, title, children, navbarClassname }) => {
  return (
    <div className="layout">
      <Helmet
        link={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: `${favicon16}`,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: `${favicon32}`,
          },
          { rel: "shortcut icon", type: "image/png", href: `${favicon32}` },
        ]}
        bodyAttributes={{ class: "has-navbar-fixed-top-off" }}
      >
        <html lang={intl.locale} />
        <meta charSet="utf-8" />
        <title>
          {title
            ? title
            : intl.formatMessage({
                id: "components.proposition.allInOne",
              })}{" "}
          | Coverflex
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "components.proposition.allInOneText",
          })}
        />
        <link rel="canonical" href="https://coverflex.com/" />
      </Helmet>
      <Nav className={navbarClassname} />
      {children}
      <Footer />
    </div>
  )
})
