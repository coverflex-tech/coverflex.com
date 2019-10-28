import React from "react"
import { navigate, Link } from "gatsby"
import { injectIntl, FormattedMessage } from "react-intl"
import { Formik } from "formik"

export default injectIntl(({ intl, inverted }) => {
  const initialValues = { email: "aaa" }

  const onSubmit = (values, actions) => {
    setTimeout(() => {
      actions.setSubmitting(false)
      navigate("/get-started/" + (values.email ? `?email=${values.email}` : ""))
    }, 100)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              name="email"
              onChange={handleChange}
              type="email"
              className="input is-medium is-primary"
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
          <div className="field">
            <button
              type="submit"
              className={`button is-fullwidth is-primary is-medium ${inverted &&
                "is-inverted"} ${isSubmitting && "is-loading"}`}
              disabled={isSubmitting}
            >
              <FormattedMessage id="components.getStarted.button" />
            </button>
          </div>
          <div className="field">
            <p className="is-size-7">
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
