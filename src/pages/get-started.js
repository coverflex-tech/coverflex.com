import React, { useState } from "react"
import { navigate } from "gatsby"
import queryString from "query-string"
import Layout from "../components/layout"
import { injectIntl, FormattedMessage } from "react-intl"

const GetStartedForm = ({ location }) => {
  const qs = queryString.parse(location.search)
  const email = qs ? qs.email : ""
  const plan = qs ? qs.plan : ""
  const [values, setValues] = useState({email, plan})
  const [loading, setLoading] = useState(false)

  const onSubmit = evt => {
    evt.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
    setTimeout(() => navigate("/signed-up/?success=1"))
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="plan" value={plan} type="hidden"/>
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="field">
                <div className="control">
                  <label htmlFor="" className="label">
                    <FormattedMessage id="components.form.firstName"/>
                  </label>
                  <input autoFocus type="text" className="input" required/>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <div className="control">
                  <label htmlFor="" className="label">
                    <FormattedMessage id="components.form.lastName"/>
                  </label>
                  <input type="text" className="input" required/>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <div className="control">
                  <label htmlFor="" className="label">
                    <FormattedMessage id="components.form.workEmail"/>
                  </label>
                  <input type="email" className="input" value={values.email} required/>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <div className="control">
                  <label htmlFor="" className="label">
                    <FormattedMessage id="components.form.phone"/>
                  </label>
                  <input type="phone" className="input"/>
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label htmlFor="" className="label">
                <FormattedMessage id="components.form.job"/>
              </label>
              <div className="select is-fullwidth">
                <select name="" id="">
                  <option>Select a role...</option>
                  <option value="ceo">CEO</option>
                  <option value="hr">HR</option>
                  <option value="finance">Finance</option>
                  <option value="administration">Administration</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label htmlFor="" className="label">
                <FormattedMessage id="components.form.business"/>
              </label>
              <div className="select is-fullwidth">
                <select name="" id="">
                  <option>Select a sector...</option>
                  <option value="tech-science">Tech & Science</option>
                  <option value="financial-legal">Financial & Legal</option>
                  <option value="software">Software</option>
                  <option value="hr-consultancy">HR & Consultancy</option>
                  <option value="marketing-pr">Marketing & PR</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label htmlFor="" className="label">
              <FormattedMessage id="components.form.companySize"/>
              </label>
              <div className="select is-fullwidth">
                <select name="" id="">
                  <option>Select a size...</option>
                  <option value="20">&lt; 20</option>
                  <option value="20-50">20-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100">&gt;100</option>
                </select>
              </div>
            </div>
          </div>
          <br/>
          <div className="field">
            <button
              className={`button is-primary is-fullwidth is-large ${loading && "is-loading"}`}
              disabled={loading}
            >
              <FormattedMessage id="components.form.signUp"/>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default injectIntl((props) => (
  <Layout title="Get Started">
    <div className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <h1 className="title is-size-1-desktop is-size-3-touch has-text-weight-normal">
              <span>
                <FormattedMessage id="pages.getStarted.title1"/>
              </span>
              <br/>
              <span className="has-text-weight-bold">
                <FormattedMessage id="pages.getStarted.title2"/>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <GetStartedForm {...props}/>
      </div>
    </div>
  </Layout>
))
