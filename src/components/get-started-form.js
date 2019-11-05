import React from "react"
import { navigate, Link } from "gatsby"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import { Formik } from "formik"
import SubmitButton from "./submit-button"
import { reduce } from "lodash"
import axios from "axios"
import { getFormUrl } from "../data/hubspot"

const submitGetStarted = data => axios.post(getFormUrl("get-started"), data)

export default injectIntl(({ intl, inverted }) => {
  const initialValues = { email: "" }

  const onSubmit = (values, actions) => {
    const fields = reduce(
      values,
      (acc, value, name) => acc.concat({ name, value }),
      []
    )

    return submitGetStarted({ fields, pageUri: window.location.href }).then(
      () => {
        actions.setSubmitting(false)
        navigate(
          "/get-started/" + (values.email ? `?email=${values.email}` : "")
        )
      }
    )
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="get-started-form">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                name="email"
                onChange={handleChange}
                type="email"
                className="input is-medium is-primary is-radiusless"
                style={
                  inverted
                    ? {
                        border: "solid 1px white",
                        background: "rgba(255, 255, 255, .1)",
                      }
                    : { background: "rgba(240, 129, 77, 0.1)" }
                }
                placeholder={intl.formatMessage({
                  id: "components.getStarted.email",
                })}
                required
              />
            </div>
            <div className="control is-hidden-touch">
              <SubmitButton
                label={intl.formatMessage({
                  id: "components.getStarted.button",
                })}
              />
            </div>
          </div>
          <div className="field is-hidden-desktop">
            <SubmitButton
              label={intl.formatMessage({ id: "components.getStarted.button" })}
            />
          </div>
          <div className="field has-text-centered">
            <p className="is-size-6 privacy-policy">
              <span>
                <FormattedMessage id="components.privacyPolicyNotice.text" />{" "}
              </span>
              <Link
                to="/privacy-policy"
                className={inverted ? "has-text-grey-dark" : "has-text-primary"}
              >
                <FormattedMessage id="components.privacyPolicyNotice.title" />
              </Link>
              .
            </p>
          </div>
        </form>
      )}
    </Formik>
  )
})
