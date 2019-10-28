import React from "react"
import { injectIntl, FormattedMessage } from "react-intl"
import Layout from "../components/layout"
import GetStartedForm from "../components/get-started-form"

export default injectIntl(props => (
  <Layout title="Get Started">
    <div className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <h1 className="title is-size-1-desktop is-size-3-touch has-text-weight-normal">
              <span>
                <FormattedMessage id="pages.getStarted.title1" />
              </span>
              <br />
              <span className="has-text-weight-bold">
                <FormattedMessage id="pages.getStarted.title2" />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <GetStartedForm {...props} />
      </div>
    </div>
  </Layout>
))
