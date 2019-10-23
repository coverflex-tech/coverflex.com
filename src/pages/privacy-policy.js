import React from "react"
import Layout from "../components/layout"
import { injectIntl, FormattedMessage } from "react-intl"

export default injectIntl((props) => (
  <Layout title="Privacy Policy" navbarClassname="is-light">
    <div className="section has-background-light">
      <div className="container">
        <h1 className="title is-size-3">
          <FormattedMessage id="pages.privacyPolicy.title"/>
        </h1>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-7">
            <div className="content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia aliquam recusandae ratione inventore quas,
              voluptatibus minima nemo qui dicta, debitis dolores temporibus quia adipisci vero?
              Sequi provident temporibus error repellat.
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
))
