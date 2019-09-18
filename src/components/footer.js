import React from "react"
import { Link } from "gatsby"
import Logo from "./logo.js"

export default () => (
  <div className="footer">
    <div className="container">
      <div className="section">
        <div className="columns" style={{lineHeight: '2.5rem', marginBottom: '4rem'}}>
          <div className="column is-8">
            <Logo/>
            <p>Insurance for the next generation</p>
          </div>
          <div className="column is-4">
            <div className="columns">
              <div className="column">
                <p>
                  <Link className="has-text-grey-dark" to="/about">About</Link>
                </p>
                <p>
                  <Link className="has-text-grey-dark" to="/how-it-works">How it works</Link>
                </p>
                <p>
                  <Link className="has-text-grey-dark" to="/plans">Plans</Link>
                </p>
              </div>
              <div className="column">
                <p>
                  <Link className="has-text-grey-dark" to="/support">Support</Link>
                </p>
                <p>
                  <Link className="has-text-grey-dark" to="/dashboard">Dashboard</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="level is-size-7">
          <div className="level-left">
            <div className="level-item">
              <p>
                Coverflex &copy; 2019 - All rights reserved
              </p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <Link className="has-text-grey-dark" to="/privacy-policy">Privacy Policy</Link>
            </div>
            <div className="level-item">
              <Link className="has-text-grey-dark" to="/cookie-settings">Cookie Settings</Link>
            </div>
            <div className="level-item">
              <Link className="has-text-grey-dark" to="/press">Press Enquiries</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
