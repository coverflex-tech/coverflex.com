import React, { useState } from "react"
import Logo from "../components/logo"
import { injectIntl } from "react-intl"

const SignInPage = () => {
  const [errors, setErrors] = useState([])
  const onSubmit = () => setErrors(["Authentication failed"])

  return (
    <div className="hero is-fullheight is-light">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="notification has-text-centered">
                <Logo />
              </div>
              <div className="box">
                <div>
                  <p className="subtitle is-size-5">
                    Sign in to your dashboard
                  </p>
                  <p className="is-size-6"></p>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <input
                    className="input"
                    type="email"
                    placeholder="Your email address"
                  />
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <input
                    className="input"
                    type="password"
                    placeholder="Your password"
                  />
                </div>
                <br />
                {errors.length > 0 && (
                  <div className="">
                    {errors.map((err, key) => (
                      <p key={key} className="help is-danger">
                        {err}
                      </p>
                    ))}
                    <br />
                  </div>
                )}
                <div className="field is-grouped is-grouped-centered">
                  <button
                    onClick={onSubmit}
                    className="button is-primary is-medium"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(SignInPage)
