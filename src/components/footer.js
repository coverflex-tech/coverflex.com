import React from "react"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import Logo from "./logo.js"

const SOCIAL_LINKS = [
  { id: "facebook", url: "" },
  { id: "twitter", url: "" },
  { id: "medium", url: "" },
  { id: "linkedin", url: "" },
]

const SocialMediaLinks = () => (
  <div className="is-size-5-desktop is-size-4-touch">
    {SOCIAL_LINKS.map(({ id, url }) => (
      <a key={id} href={url} className="icon is-medium has-text-grey-dark">
        <i className={`socicon-${id}`}></i>
      </a>
    ))}
  </div>
)

export default injectIntl(() => (
  <div className="footer">
    <div className="container">
      <div>
        <Logo />
      </div>
      <div
        className="columns"
        style={{ lineHeight: "2.5rem", marginBottom: "4rem" }}
      >
        <div className="column is-4">
          <p>
            <FormattedMessage id="components.footer.tagline" />
          </p>
        </div>
        <div className="column is-2">
          <p className="has-text-weight-bold">
            <FormattedMessage id="components.footer.company.title" />
          </p>
          <ul>
            <li>
              <Link className="has-text-grey-dark" to="/about">
                <FormattedMessage id="components.footer.company.about" />
              </Link>
            </li>
            <li>
              <Link className="has-text-grey-dark" to="/faq">
                <FormattedMessage id="components.footer.company.faq" />
              </Link>
            </li>
            <li>
              <Link className="has-text-grey-dark" to="/about#careers">
                <FormattedMessage id="components.footer.company.careers" />
              </Link>
            </li>
            <li>
              <Link className="has-text-grey-dark" to="/blog">
                <FormattedMessage id="components.footer.company.blog" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="column is-2">
          <p className="has-text-weight-bold">
            <FormattedMessage id="components.footer.contact" />
          </p>
          <SocialMediaLinks />
          <p>hello@coverflex.com</p>
        </div>
        <div className="column is-2">
          <p className="has-text-weight-bold">
            <FormattedMessage id="components.footer.legal.title" />
          </p>
          <ul>
            <li>
              <Link className="has-text-grey-dark" to="/privacy-policy">
                <FormattedMessage id="components.footer.legal.privacyPolicy" />
              </Link>
            </li>
            <li>
              <Link className="has-text-grey-dark" to="/cookie-settings">
                <FormattedMessage id="components.footer.legal.cookies" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="column is-2">
          <p className="has-text-weight-bold">
            <FormattedMessage id="components.footer.access.title" />
          </p>
          <ul>
            <li>
              <Link className="has-text-grey-dark" to="/signin">
                <FormattedMessage id="components.footer.access.member" />
              </Link>
            </li>
            <li>
              <Link className="has-text-grey-dark" to="/signin">
                <FormattedMessage id="components.footer.access.employer" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="is-size-7">
        <FormattedMessage id="components.footer.copyright" />
      </p>
    </div>
  </div>
))
