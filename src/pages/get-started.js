import React, { useState } from "react"
import { navigate } from "gatsby"
import queryString from "query-string"
import Layout from "../components/layout"
import { injectIntl, FormattedMessage } from "react-intl"
import Select from "react-select"
import countryList from "country-list"
import _ from "lodash"

const ROLES = ["CEO", "HR", "Finance", "Administration", "Other"].map(role => ({
  value: role,
  label: role,
}))

const COUNTRIES = countryList
  .getData()
  .map(({ name }) => ({ label: name, value: name }))

const BUSINESS_SECTORS = _.map(
  {
    "tech-science": "Tech & Science",
    "financial-legal": "Financial & Legal",
    software: "Software",
    "hr-consultancy": "HR & Consultancy",
    "marketing-pr": "Marketing & PR",
    other: "Other",
  },
  (label, value) => ({ label, value })
)

const COMPANY_SIZES = ["< 20", "20-50", "50-100", "> 100"].map(size => ({
  value: size,
  label: size,
}))

const OPTIONS = {
  isClearable: true,
  theme: theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "#F0814D",
      primary25: "rgba(240,129,77,.2)",
    },
  }),
}

const GetStartedForm = ({ location }) => {
  const qs = queryString.parse(location.search)
  const email = qs ? qs.email : ""
  const plan = qs ? qs.plan : ""
  const [values] = useState({ email, plan })
  const [loading, setLoading] = useState(false)

  const onSubmit = evt => {
    evt.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
    setTimeout(() => navigate("/signed-up/?success=1"))
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="plan" value={plan} type="hidden" />
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="field">
                <div className="control">
                  <label htmlFor="" className="label">
                    <FormattedMessage id="components.form.firstName" />
                  </label>
                  <input autoFocus type="text" className="input" required />
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <div className="control">
                  <label htmlFor="" className="label">
                    <FormattedMessage id="components.form.lastName" />
                  </label>
                  <input type="text" className="input" required />
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <div className="control">
                  <label htmlFor="" className="label">
                    <FormattedMessage id="components.form.workEmail" />
                  </label>
                  <input
                    type="email"
                    className="input"
                    value={values.email}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <div className="control">
                  <label htmlFor="" className="label">
                    <FormattedMessage id="components.form.phone" />
                  </label>
                  <input type="phone" className="input" />
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label htmlFor="" className="label">
                <FormattedMessage id="components.form.country" />
              </label>
              <Select {...OPTIONS} options={COUNTRIES} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label htmlFor="" className="label">
                <FormattedMessage id="components.form.job" />
              </label>
              <Select {...OPTIONS} options={ROLES} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label htmlFor="" className="label">
                <FormattedMessage id="components.form.business" />
              </label>
              <Select {...OPTIONS} options={BUSINESS_SECTORS} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label htmlFor="" className="label">
                <FormattedMessage id="components.form.companySize" />
              </label>
              <Select {...OPTIONS} options={COMPANY_SIZES} />
            </div>
          </div>
          <br />
          <div className="field">
            <button
              className={`button is-primary is-fullwidth is-large ${loading &&
                "is-loading"}`}
              disabled={loading}
            >
              <FormattedMessage id="components.form.signUp" />
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

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
