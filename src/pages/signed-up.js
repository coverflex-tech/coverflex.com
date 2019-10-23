import React from "react"
import { Link } from "gatsby"
import queryString from "query-string"
import Layout from "../components/layout"
import { injectIntl, FormattedMessage } from "react-intl"

const Content = () => (
  <div className="section">
    <div className="columns is-centered">
      <div className="column is-two-thirds has-text-centered">
        <div className="">
          <h1 className="title is-size-2-desktop is-size-3-touch has-text-weight-normal">
            <FormattedMessage id="pages.signedUp.welcomeTitle"/>
          </h1>
          <p className="is-size-6">
            <FormattedMessage id="pages.signedUp.welcomeText"/>
          </p>
        </div>
        <div className="section">
          <p className="title is-size-2-desktop is-size-3-touch has-text-weight-normal">
            <FormattedMessage id="pages.signedUp.scheduleTitle"/>
          </p>
          <p className="is-size-6">
            <FormattedMessage id="pages.signedUp.scheduleText"/>
          </p>
          <br/>
          <div>
            <button className="button is-primary is-medium is-outlined">
              <FormattedMessage id="pages.signedUp.scheduleButton"/>
            </button>
          </div>
          <br/>
          <div>
            <Link className="is-link" to="/">
              <FormattedMessage id="pages.signedUp.cancelButton"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Empty = () => (
  <div className="section">
    <div className="columns is-centered">
      <div className="column is-two-thirds has-text-centered">
        <div className="">
          <h1 className="title is-size-2-desktop is-size-3-touch has-text-weight-normal">
            <FormattedMessage id="pages.404.title"/>
          </h1>
        </div>
      </div>
    </div>
  </div>
)

export default injectIntl(({ location }) => {
  const qs = queryString.parse(location.search)
  const success = qs.success || false

  return (
    <Layout title="Signed up">
      { success ? <Content /> : <Empty /> }
    </Layout>
  )
})
