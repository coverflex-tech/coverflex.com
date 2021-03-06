import React, { useState } from "react"
import { Link, FormattedMessage } from "gatsby-plugin-intl"
import { injectIntl } from "react-intl"
import { Formik } from "formik"
import axios from "axios"
import { getFormUrl } from "../data/hubspot"
import SubmitButton from "./submit-button"
import image from "../images/newsletter.png"

const subscribeNewsletter = data => axios.post(getFormUrl("newsletter"), data)

const NewsletterModal = ({ visible, onClose }) => (
  <div className={"modal" + (visible ? " is-active" : "")}>
    <div className="modal-background" onClick={onClose}></div>
    <div className="modal-content">
      <div className="section is-medium has-background-white has-text-grey-dark">
        <div className="has-text-centered">
          <div className="is-hidden-touch">
            <img src={image} alt="" style={{ maxWidth: "240px" }} />
          </div>
          <div className="is-hidden-desktop">
            <img src={image} alt="" style={{ maxWidth: "150px" }} />
          </div>
          <br />
          <p className="title is-size-3-desktop is-size-4-touch">
            <FormattedMessage id="components.newsletter.thanksTitle" />
          </p>
          <p className="is-size-5-desktop is-size-6-touch">
            <FormattedMessage id="components.newsletter.thanksSubtitle" />
          </p>
          <br />
          <button
            className="button is-medium is-primary is-radiusless has-text-weight-bold"
            onClick={onClose}
          >
            <FormattedMessage id="components.newsletter.thanksButton" />
          </button>
        </div>
      </div>
    </div>
    <button
      onClick={onClose}
      className="modal-close is-large"
      aria-label="close"
    ></button>
  </div>
)

const NewsletterForm = injectIntl(({ intl, inverted }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const initialValues = { email: "" }
  const inputClass =
    "input is-medium is-primary is-radiusless" +
    (inverted ? " is-inverted has-text-white" : "")

  const onSubmit = (values, actions) => {
    if (!values.email) return

    const fields = [{ name: "email", value: values.email }]

    return subscribeNewsletter({ fields, pageUri: window.location.href }).then(
      () => {
        actions.setSubmitting(false)
        setModalVisible(true)
      }
    )
  }

  return (
    <div>
      <NewsletterModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  name="email"
                  type="email"
                  className={inputClass}
                  style={{ background: "rgba(240, 129, 77, 0.1)" }}
                  placeholder={intl.formatMessage({
                    id: "components.newsletter.email",
                  })}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="control is-hidden-touch">
                <SubmitButton
                  label={intl.formatMessage({
                    id: "components.newsletter.button",
                  })}
                />
              </div>
            </div>
            <div className="field is-hidden-desktop">
              <SubmitButton
                label={intl.formatMessage({
                  id: "components.newsletter.button",
                })}
              />
            </div>
            <div className="field">
              <p className="is-size-6-desktop is-size-7-touch">
                <span>
                  <FormattedMessage id="components.privacyPolicyNotice.text" />{" "}
                </span>
                <Link to="/privacy-policy" className="has-text-primary">
                  <FormattedMessage id="components.privacyPolicyNotice.title" />
                </Link>
                .
              </p>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
})

export default injectIntl(({ intl, inverted }) => {
  const rootClass =
    "section is-medium newsletter" +
    (!inverted
      ? " has-background-light has-text-grey-dark"
      : " has-background-grey-dark has-text-white")

  return (
    <div className={rootClass}>
      <div className="columns is-centered">
        <div className="column is-10 has-text-centered">
          <p className="is-size-1-desktop is-size-4-touch headline">
            <FormattedMessage id="components.newsletter.title1" />
            <br />
            <span className="has-text-weight-bold">
              <FormattedMessage id="components.newsletter.title2" />
            </span>
          </p>
          <br />
          <p className="is-size-5">
            <FormattedMessage id="components.newsletter.subtitle" />
          </p>
          <br />
          <div className="columns is-centered">
            <div className="column is-6-desktop is-8-tablet is-5-widescreen">
              <NewsletterForm inverted={inverted} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
