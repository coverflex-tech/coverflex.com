import React from "react"
import CUSTOMERS from "../data/customers"

export default ({ title, dark }) => (
  <div className="section is-medium">
    <div className="container">
      <p className="is-size-5 is-hidden-touch">{title}</p>
      <p className="is-size-5 is-hidden-desktop has-text-centered">{title}</p>
      <br />
      <br />
      <div className="columns is-multiline is-mobile is-vcentered has-text-centered">
        {CUSTOMERS.map((customer, key) => (
          <div key={key} className="column is-narrow-desktop is-half-mobile">
            <img
              src={dark ? customer.logoDark : customer.logo}
              alt=""
              style={{ padding: "10px", opacity: "0.4" }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)
