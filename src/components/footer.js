import React from "react"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import Logo from "./logo.js"

const SOCIAL_LINKS = [
  { id: "facebook", url: "" },
  { id: "twitter", url: "" },
  { id: "medium", url: "" },
  { id: "linkedin", url: "" },
]

const faqUrl = locale =>
  locale === "pt" ?
  "https://coverflex-support.zendesk.com/hc/pt-pt/sections/360003196659-FAQ" :
  "https://coverflex-support.zendesk.com/hc/en-us/sections/360003196659-FAQ"

const SocialMediaLinks = () => (
  <div className="is-size-5-desktop is-size-4-touch">
    {SOCIAL_LINKS.map(({ id, url }) => (
      <a
        key={id}
        href={url}
        className="icon is-medium has-text-grey-dark"
        aria-label={"coverflex " + id}
      >
        <i className={`socicon-${id}`}></i>
      </a>
    ))}
  </div>
)

export default injectIntl(({ intl }) => {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <Logo />
        </div>
        <div
          className="columns"
          style={{ lineHeight: "2.5", marginBottom: "4rem" }}
        >
          <div className="column is-4">
            <h3 style={{ lineHeight: "1.5", marginTop: "0.5rem" }}>
              <FormattedMessage id="components.footer.tagline" />
            </h3>
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
                <a className="has-text-grey-dark" href={faqUrl(intl.locale)}>
                  <FormattedMessage id="components.footer.company.faq" />
                </a>
              </li>
              <li>
                <Link className="has-text-grey-dark" to="/about#careers">
                  <FormattedMessage id="components.footer.company.careers" />
                  {" "}
                  <sup className="has-text-primary">
                    <FormattedMessage id="components.footer.company.hiring" />
                  </sup>
                </Link>
              </li>
              <li>
                <a className="has-text-grey-dark" href="https://medium.com/@getcoverflex" target="_blank" rel="noopener noreferrer">
                  <FormattedMessage id="components.footer.company.blog" />
                </a>
              </li>
            </ul>
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
                <Link className="has-text-grey-dark" to="/cookie-policy">
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
          <div className="column is-2">
            <p className="has-text-weight-bold">
              <FormattedMessage id="components.footer.contact" />
            </p>
            <p>
              <a href="mailto:hello@coverflex.com">hello@coverflex.com</a>
            </p>
            <SocialMediaLinks />
          </div>
        </div>
        <hr />
        <p className="is-size-7">
          <FormattedMessage id="components.footer.copyright" />
        </p>
      </div>
    </div>
  )
})
