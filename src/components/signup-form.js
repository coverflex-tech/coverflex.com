import React from "react"
import queryString from "query-string"
import { injectIntl, FormattedMessage, navigate } from "gatsby-plugin-intl"
import Select from "react-select"
import countryList from "country-list"
import { reduce } from "lodash"
import { Formik, useField } from "formik"
import axios from "axios"
import SubmitButton from "./submit-button"
import { getFormUrl } from "../data/hubspot"

const submitSignUp = data => axios.post(getFormUrl("sign-up"), data)

const FormField = ({ name, label, required, ...props }) => {
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
        <input id={id} className={inputClass} {...field} {...props} />
      </div>
      {hasError ? <p className="help is-danger">{meta.error}</p> : null}
    </div>
  )
}

export default injectIntl(({ intl, location }) => {
  const qs = queryString.parse(location.search)

  const initialValues = {
    email: qs.email || "",
    selected_plan: qs.plan || "",
    firstname: "",
    lastname: "",
    phone: "",
  }

  const rolesOptions = "ceo,hr,finance,administration,other"
    .split(",")
    .map(key => ({
      value: intl.formatMessage({ id: "components.form.rolesOptions." + key }),
      label: intl.formatMessage({ id: "components.form.rolesOptions." + key }),
    }))

  const businessOptions = "tech,financial,software,hr,marketing,other"
    .split(",")
    .map(key => ({
      value: intl.formatMessage({
        id: "components.form.businessOptions." + key,
      }),
      label: intl.formatMessage({
        id: "components.form.businessOptions." + key,
      }),
    }))

  const countryOptions = countryList
    .getData()
    .map(({ name }) => ({ label: name, value: name }))

  const companySizeOptions = ["< 20", "20-50", "50-100", "> 100"].map(size => ({
    value: size,
    label: size,
  }))

  const selectOptions = {
    placeholder: intl.formatMessage({
      id: "components.form.selectPlaceholder",
    }),
    theme: theme => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary: "#F0814D",
        primary25: "rgba(240,129,77,.2)",
      },
    }),
  }

  const validateForm = (values, props) => {
    let errors = {}

    if (!values.email) errors.email = "Required"
    if (
      !errors.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    )
      errors.email = "Invalid format"
    if (!values.firstname) errors.firstname = "Required"
    if (!values.lastname) errors.lastname = "Required"

    return errors
  }

  const onSubmit = (values, actions) => {
    const fields = reduce(
      values,
      (acc, value, name) => acc.concat({ name, value }),
      []
    )

    return submitSignUp({ fields, pageUri: location.href }).then(() => {
      actions.setSubmitting(false)
      navigate("/signed-up/?success=1")
    })
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input name="selected_plan" type="hidden" />
            <div className="columns is-centered">
              <div className="column is-two-thirds">
                <div className="columns is-multiline">
                  <div className="column is-6">
                    <FormField
                      name="firstname"
                      label={intl.formatMessage({
                        id: "components.form.firstName",
                      })}
                      required
                    />
                  </div>
                  <div className="column is-6">
                    <FormField
                      name="lastname"
                      label={intl.formatMessage({
                        id: "components.form.lastName",
                      })}
                      required
                    />
                  </div>
                  <div className="column is-6">
                    <FormField
                      name="email"
                      label={intl.formatMessage({
                        id: "components.form.email",
                      })}
                      type="email"
                      required
                    />
                  </div>
                  <div className="column is-6">
                    <FormField
                      name="phone"
                      label={intl.formatMessage({
                        id: "components.form.phone",
                      })}
                      type="phone"
                      minLength="7"
                      maxLength="20"
                    />
                  </div>
                  <div className="column is-6">
                    <div className="field">
                      <div className="control">
                        <label htmlFor="" className="label">
                          <FormattedMessage id="components.form.country" />
                        </label>
                        <Select
                          {...selectOptions}
                          onChange={({ value }) =>
                            handleChange({ target: { value, name: "country" } })
                          }
                          options={countryOptions}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-6">
                    <div className="field">
                      <div className="control">
                        <label htmlFor="" className="label">
                          <FormattedMessage id="components.form.job" />
                        </label>
                        <Select
                          {...selectOptions}
                          onChange={({ value }) =>
                            handleChange({
                              target: { value, name: "jobtitle" },
                            })
                          }
                          options={rolesOptions}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-6">
                    <div className="field">
                      <div className="control">
                        <label htmlFor="" className="label">
                          <FormattedMessage id="components.form.business" />
                        </label>
                        <Select
                          {...selectOptions}
                          onChange={({ value }) =>
                            handleChange({
                              target: { value, name: "business_sector" },
                            })
                          }
                          options={businessOptions}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-6">
                    <div className="field">
                      <div className="control">
                        <label htmlFor="" className="label">
                          <FormattedMessage id="components.form.companySize" />
                        </label>
                        <Select
                          {...selectOptions}
                          onChange={({ value }) =>
                            handleChange({
                              target: { value, name: "company_size" },
                            })
                          }
                          options={companySizeOptions}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{margin: "20px 0 30px"}}>
                  <p className="is-size-6-desktop is-size-7-touch">
                    <FormattedMessage id="components.form.gdprNotice" />
                  </p>
                </div>
                <div className="field">
                  <SubmitButton
                    large
                    label={intl.formatMessage({ id: "components.form.signUp" })}
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
})
