import React from "react"
import Layout from "../components/layout"
import { injectIntl, FormattedMessage } from "react-intl"

export default injectIntl(() => (
  <Layout title="Page not found">
    <div className="section">
      <div className="container">
        <p className="title is-size-3">
          <FormattedMessage id="pages.404.title" />
        </p>
      </div>
    </div>
  </Layout>
))
