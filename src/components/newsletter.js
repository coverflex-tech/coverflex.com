import React, { useState } from "react"
import { Link } from "gatsby"


export default () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState()

  const hideModal = () => setModalVisible(false)

  const showModal = () => {setModalVisible(true); setLoading(false)}

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
          <p className="title is-size-2-desktop is-size-3-touch">Subscribe to our newsletter</p>
          <p className="is-size-5">Don’t worry, we won’t do it more than once a week.</p>
          <br/>
          <form onSubmit={onSubmit}>
            <div className="columns">
              <div className="column is-offset-2 is-8">
                <div className="field">
                  <input
                    type="email"
                    className="input is-medium is-primary"
                    style={{background: "rgba(240, 129, 77, 0.1)"}}
                    placeholder="name@youremail.com"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="field">
                  <button
                    type="submit"
                    className={"button is-fullwidth is-primary is-medium" + (loading ? " is-loading" : "")}
                    disabled={loading}
                  >
                    Subscribe
                  </button>
                </div>
                <div className="field">
                  <p className="is-size-7">
                    <span>We care about your data. Check our </span>
                    <Link to="/privacy-policy" className="has-text-primary">Privacy Policy</Link>.
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
          <div className="notification is-white">
            <div className="section is-medium has-text-centered">
              <p className="title is-size-3-desktop is-size-4-touch">
                Thank you for subscribing
              </p>
              <p className="is-size-5">We'll get back to you soon</p>
              <br/>
              <button className="button is-medium is-primary" onClick={hideModal}>OK, got it</button>
            </div>
          </div>
        </div>
        <button onClick={hideModal} className="modal-close is-large" aria-label="close"></button>
      </div>
    </div>
  )
}
