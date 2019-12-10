import React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import contentEn from "../content/privacy-policy-en.md"

export default injectIntl(({ intl }) => {
  const content = intl.locale === "pt" ? contentEn : contentEn

  return (
    <Layout title={intl.formatMessage({ id: "pages.privacyPolicy.title" })}>
      <div className="section is-medium">
        <div className="container has-text-centered">
          <h1 className="title is-size-1-desktop is-size-2-touch">
            <FormattedMessage id="pages.privacyPolicy.title" />
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-7">
            <div className="content">
              <div dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
})
