import React from "react"
import Logo from "./logo.js"

export default () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Logo/>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-menu">
          <div className="navbar-item">
            About
          </div>
          <div className="navbar-item">
            How it works
          </div>
          <div className="navbar-item">
            Plans
          </div>
          <div className="navbar-item">
            <button className="button is-primary is-rounded is-medium">
              <span className="is-size-6 has-text-weight-bold">Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
