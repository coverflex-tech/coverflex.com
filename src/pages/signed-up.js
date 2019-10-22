import React from "react"
import { Link } from "gatsby"
import queryString from "query-string"
import Layout from "../components/layout"

const Content = () => (
  <div className="section">
    <div className="columns is-centered">
      <div className="column is-two-thirds has-text-centered">
        <div className="">
          <h1 className="title is-size-2-desktop is-size-3-touch has-text-weight-normal">
            Welcome
          </h1>
          <p className="is-size-6">Thank you for signing up. <br/>We'll be in touch</p>
        </div>
        <div className="section">
          <p className="title is-size-2-desktop is-size-3-touch has-text-weight-normal">
            Want to have a closer look?
          </p>
          <p className="is-size-6">Schedule a demo with the team.</p>
          <br/>
          <div>
            <button className="button is-primary is-medium is-outlined">
              Schedule a date
            </button>
          </div>
          <br/>
          <div>
            <Link className="is-link" to="/">Maybe later</Link>
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
            Not found
          </h1>
        </div>
      </div>
    </div>
  </div>
)

export default ({ location }) => {
  const qs = queryString.parse(location.search)
  const success = qs.success || false

  return (
    <Layout title="Signed up">
      { success ? <Content /> : <Empty /> }
    </Layout>
  )
}
