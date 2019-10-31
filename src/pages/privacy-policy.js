import React from "react"
import Layout from "../components/layout"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

export default injectIntl(({ intl }) => (
  <Layout title="Privacy Policy">
    <div className="section is-medium">
      <div className="container has-text-centered">
        <h1 className="title is-size-1-desktop is-size-2-touch">
          <FormattedMessage id="pages.privacyPolicy.title" />
        </h1>
        <br />
        <p className="is-size-6">Last updated: 01/11/2019</p>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-7">
            <div className="content">
              <div dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: "pages.privacyPolicy.content" })}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
))
