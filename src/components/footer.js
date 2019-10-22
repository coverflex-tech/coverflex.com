import React from "react"
import { Link } from "gatsby"
import Logo from "./logo.js"

const SocialMediaLinks = () => (
  <div className="is-size-5-desktop is-size-4-touch">
    <a href="/" className="icon is-medium has-text-grey-dark">
      <i className="socicon-facebook"></i>
    </a>
    <a href="/" className="icon is-medium has-text-grey-dark">
      <i className="socicon-twitter"></i>
    </a>
    <a href="/" className="icon is-medium has-text-grey-dark">
      <i className="socicon-medium"></i>
    </a>
    <a href="/" className="icon is-medium has-text-grey-dark">
      <i className="socicon-linkedin"></i>
    </a>
  </div>
)

export default () => (
  <div className="footer">
    <div className="container">
      <div>
        <Logo/>
      </div>
      <div className="columns" style={{lineHeight: '2.5rem', marginBottom: '4rem'}}>
        <div className="column is-4">
          <p>Insurance for the next generation</p>
        </div>
        <div className="column is-2">
          <p className="has-text-weight-bold">Company</p>
          <ul>
            <li>
              <Link className="has-text-grey-dark" to="/about">About</Link>
            </li>
            <li>
              <Link className="has-text-grey-dark" to="/faq">FAQ</Link>
            </li>
            <li>
              <Link className="has-text-grey-dark" to="/about#careers">Careers</Link>
            </li>
            <li>
              <Link className="has-text-grey-dark" to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="column is-2">
          <p className="has-text-weight-bold">Contact</p>
          <SocialMediaLinks/>
          <p>hello@coverflex.com</p>
        </div>
        <div className="column is-2">
          <p className="has-text-weight-bold">Legal</p>
          <ul>
            <li>
              <Link className="has-text-grey-dark" to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link className="has-text-grey-dark" to="/cookie-settings">Cookie Settings</Link>
            </li>
          </ul>
        </div>
        <div className="column is-2">
          <p className="has-text-weight-bold">Access</p>
          <ul>
            <li>
              <Link className="has-text-grey-dark" to="/signin">Member Sign In</Link>
            </li>
            <li>
              <Link className="has-text-grey-dark" to="/signin">Employer Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="is-size-7">
        Coverflex &copy; 2019 - All rights reserved
      </p>
    </div>
  </div>
)
