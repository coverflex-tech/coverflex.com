import React from "react"
import queryString from "query-string"
import { injectIntl, FormattedMessage } from "react-intl"
import Select from "react-select"
import countryList from "country-list"
import _ from "lodash"
import { Formik, useField } from "formik"
import SubmitButton from "./submit-button"

const ROLES = [
  "CEO",
  "HR",
  "Finance",
  "Administration",
  "Other",
].map(role => ({ value: role, label: role }))

const COUNTRIES = countryList.getData().map(({ name }) => ({ label: name, value: name }))

const BUSINESS_SECTORS = _.map({
  "tech-science": "Tech & Science",
  "financial-legal": "Financial & Legal",
  "software": "Software",
  "hr-consultancy": "HR & Consultancy",
  "marketing-pr": "Marketing & PR",
  "other": "Other",
}, (label, value) => ({ label, value }))

const COMPANY_SIZES = [
  "< 20",
  "20-50",
  "50-100",
  "> 100",
].map(size => ({ value: size, label: size }))

const SELECT_OPTIONS = {
  isClearable: true,
  theme: theme => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary: "#F0814D",
      primary25: "rgba(240,129,77,.2)",
    }
  })
}

const FormField = ({ name, label, required, ...props}) => {
  const [field, meta] = useField(name)
  const id = `formfield-${name}`
  const hasError = meta.touched && meta.error
  const inputClass = `input is-radiusless${hasError ? " is-danger" : ""}`
  const labelClass = `label${hasError ? " has-text-danger" : ""}`

  return (
    <div className="field">
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="is-size-6"> *</span>}
      </label>
      <div className="control">
        <input id={id} className={inputClass} {...field} {...props}/>
      </div>
      {hasError ? (
        <p className="help is-danger">{meta.error}</p>
      ) : null}
    </div>
  )
}

// const submitForm = data => {
//   // const portalId = "6540453"
//   // const formId = "0b7b8bce-ef27-4922-b9d9-508d1519891a"
//   // const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`
//   // return axios.post(url, data)
//   return new Promise((resolve) => {
//     setTimeout(resolve(true), 500)
//   })
// }

export default injectIntl(({ intl, location }) => {
  const qs = queryString.parse(location.search)
  const initialValues = {
    email: qs.email || "",
    selected_plan: qs.plan || "",
    firstName: "",
    lastName: "",
  }

  const validateForm = (values, props) => {
    let errors = {}

    if (!values.email) errors.email = "Required"
    if (!errors.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = "Invalid format"
    if (!values.firstName) errors.firstName = "Required"
    if (!values.lastName) errors.lastName = "Required"

    return errors
  }

  const onSubmit = (values, actions) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        actions.setSubmitting(false)
        resolve()
      }, 1000)
    })
    // const fields = _.reduce(values, (acc, value, name) => acc.concat({ name, value }), [])
    // const data = { fields, context: { pageUri: location.href } }

    // submitForm(data)
    //   .then(() => {
    //     actions.setSubmitting(false)
    //     setTimeout(() => navigate("/signed-up/?success=1"))
    //   })
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input name="selected_plan" type="hidden"/>
            <div className="columns is-centered">
              <div className="column is-two-thirds">
                <div className="columns is-multiline">
                  <div className="column is-6">
                    <FormField
                      name="firstName"
                      label={intl.formatMessage({ id: "components.form.firstName" })}
                      autoFocus
                      required
                    />
                  </div>
                  <div className="column is-6">
                    <FormField
                      name="lastName"
                      label={intl.formatMessage({ id: "components.form.lastName" })}
                      required
                    />
                  </div>
                  <div className="column is-6">
                    <FormField
                      name="email"
                      label={intl.formatMessage({ id: "components.form.email" })}
                      type="email"
                      required
                    />
                  </div>
                  <div className="column is-6">
                    <FormField
                      name="phone"
                      label={intl.formatMessage({ id: "components.form.phone" })}
                      type="phone"
                    />
                  </div>
                </div>
                <div className="columns is-multiline">
                  <div className="column is-12">
                    <div className="field">
                      <div className="control">
                        <label htmlFor="" className="label">
                          <FormattedMessage id="components.form.country"/>
                        </label>
                        <Select
                          {...SELECT_OPTIONS}
                          onChange={({ value }) => handleChange({ target: { value, name: "country" }})}
                          options={COUNTRIES}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-12">
                    <div className="field">
                      <div className="control">
                        <label htmlFor="" className="label">
                          <FormattedMessage id="components.form.job"/>
                        </label>
                        <Select
                          {...SELECT_OPTIONS}
                          onChange={({ value }) => handleChange({ target: { value, name: "jobtitle" }})}
                          options={ROLES}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-12">
                    <div className="field">
                      <div className="control">
                        <label htmlFor="" className="label">
                          <FormattedMessage id="components.form.business"/>
                        </label>
                        <Select
                          {...SELECT_OPTIONS}
                          onChange={({ value }) => handleChange({ target: { value, name: "business_sector" }})}
                          options={BUSINESS_SECTORS}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-12">
                    <div className="field">
                      <div className="control">
                        <label htmlFor="" className="label">
                          <FormattedMessage id="components.form.companySize"/>
                        </label>
                        <Select
                          {...SELECT_OPTIONS}
                          onChange={({ value }) => handleChange({ target: { value, name: "company_size" }})}
                          options={COMPANY_SIZES}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br/>
                <div className="field">
                  <SubmitButton label={intl.formatMessage({ id: "components.form.signUp" })}/>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
})
