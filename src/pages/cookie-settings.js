import React from "react"
import Layout from "../components/layout"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

export default injectIntl(() => (
  <Layout title="Cookie Settings">
    <div className="section is-medium">
      <div className="container has-text-centered">
        <h1 className="title is-size-1-desktop is-size-2-touch">
          <FormattedMessage id="pages.cookieSettings.title" />
        </h1>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-7">
            <div className="content">
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
))
