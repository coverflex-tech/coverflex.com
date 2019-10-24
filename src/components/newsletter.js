import React, { useState } from "react"
import { Link, FormattedMessage } from "gatsby-plugin-intl"
import { injectIntl } from "react-intl"

export default injectIntl(({ intl }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState()

  const hideModal = () => setModalVisible(false)

  const showModal = () => {
    setModalVisible(true)
    setLoading(false)
  }

  const onChange = evt => setEmail(evt.target.value)

  const onSubmit = evt => {
    evt.preventDefault()

    if (!email) return

    setLoading(true)
    setTimeout(() => showModal(), 500)
  }

  return (
    <div className="section is-medium has-background-light">
      <div className="columns is-centered">
        <div className="column is-half has-text-centered">
          <p className="title is-size-2-desktop is-size-3-touch">
            <FormattedMessage id="components.newsletter.title" />
          </p>
          <p className="is-size-5">
            <FormattedMessage id="components.newsletter.subtitle" />
          </p>
          <br />
          <form onSubmit={onSubmit}>
            <div className="columns">
              <div className="column is-offset-2 is-8">
                <div className="field">
                  <input
                    type="email"
                    className="input is-medium is-primary"
                    style={{ background: "rgba(240, 129, 77, 0.1)" }}
                    placeholder={intl.formatMessage({
                      id: "components.newsletter.email",
                    })}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="field">
                  <button
                    type="submit"
                    className={
                      "button is-fullwidth is-primary is-medium" +
                      (loading ? " is-loading" : "")
                    }
                    disabled={loading}
                  >
                    <FormattedMessage id="components.newsletter.button" />
                  </button>
                </div>
                <div className="field">
                  <p className="is-size-7">
                    <span>
                      <FormattedMessage id="components.privacyPolicyNotice.text" />{" "}
                    </span>
                    <Link to="/privacy-policy" className="has-text-primary">
                      <FormattedMessage id="components.privacyPolicyNotice.title" />
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={"modal" + (modalVisible ? " is-active" : "")}>
        <div className="modal-background" onClick={hideModal}></div>
        <div className="modal-content">
          <div className="notification is-white is-radiusless">
            <div className="section is-medium has-text-centered">
              <p className="title is-size-3-desktop is-size-4-touch">
                <FormattedMessage id="components.newsletter.thanksTitle" />
              </p>
              <p className="is-size-5-desktop is-size-6-touch">
                <FormattedMessage id="components.newsletter.thanksSubtitle" />
              </p>
              <br />
              <button
                className="button is-medium is-primary"
                onClick={hideModal}
              >
                <FormattedMessage id="components.newsletter.thanksButton" />
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={hideModal}
          className="modal-close is-large"
          aria-label="close"
        ></button>
      </div>
    </div>
  )
})
