import React from "react"
import Layout from "../components/layout"
import { injectIntl, FormattedMessage } from "react-intl"

const Content = () => (
  <div className="content">
    <p className="is-size-3">Scope</p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eligendi ut modi consequuntur impedit assumenda nesciunt nobis porro ab sunt aperiam delectus esse ullam aut quia, numquam debitis. Provident, facilis?
    </p>
  </div>
)

export default injectIntl(() => (
  <Layout title="Privacy Policy">
    <div className="section is-medium">
      <div className="container has-text-centered">
        <h1 className="title is-size-1-desktop is-size-2-touch">
          <FormattedMessage id="pages.privacyPolicy.title"/>
        </h1>
        <br/>
        <p className="is-size-6">Last updated: 01/11/2019</p>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-7">
            <Content />
          </div>
        </div>
      </div>
    </div>
  </Layout>
))
