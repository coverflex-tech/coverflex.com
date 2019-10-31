import React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SignupForm from "../components/signup-form"

export default injectIntl(props => (
  <Layout title="Get Started Web Summit 2019">
    <div className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <h1 className="title is-size-1-desktop is-size-3-touch has-text-weight-normal">
              <span>
                {/* <FormattedMessage id="pages.getStarted.title1" /> */}
                Welcome Web Summit 2019
              </span>
              <br />
              <span className="has-text-weight-bold">
                {/* <FormattedMessage id="pages.getStarted.title2" /> */}
                Ready for the next-gen insurance?
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <SignupForm {...props} />
      </div>
    </div>
  </Layout>
))
