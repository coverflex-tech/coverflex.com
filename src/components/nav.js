import React, { useState } from "react"
import Logo from "./logo.js"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import { changeLocale } from "gatsby-plugin-intl/link"

const LanguageSwitcher = ({ intl: { locale } }) => {
  const activeClass = "has-text-weight-bold"

  return (
    <div>
      <span
        onClick={() => changeLocale("en")}
        className={locale === "en" ? activeClass : "is-clickable"}
      >
        EN
      </span>
      <span className=""> / </span>
      <span
        onClick={() => changeLocale("pt")}
        className={locale === "pt" ? activeClass : "is-clickable"}
      >
        PT
      </span>
    </div>
  )
}

export default injectIntl(({ className, intl }) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [animating, setAnimating] = useState(false)

  const toggleMenu = evt => {
    if (evt) evt.preventDefault()
    if (animating) return
    if (menuVisible) {
      setAnimating(true)
      setTimeout(() => {
        setAnimating(false)
        setMenuVisible(false)
      }, 500)
    } else {
      setMenuVisible(true)
    }
  }

  const navBarClass =
    `navbar is-spaced is-fixed-top ` + (className || "is-white")

  const menuClass =
    "modal animated faster fadeIn is-hidden-desktop" +
    (menuVisible ? " is-active" : "") +
    (animating && menuVisible ? " fadeOut" : "")

  return (
    <div>
      <nav
        className={navBarClass}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Logo />
            </div>
            <a
              href="/"
              onClick={toggleMenu}
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-menu">
              <div className="navbar-item">
                <Link className="has-text-grey-dark" to="/#pricing">
                  <FormattedMessage id="components.nav.pricing" />
                </Link>
              </div>
              <div className="navbar-item">
                <Link className="has-text-grey-dark" to="/#testimonials">
                  <FormattedMessage id="components.nav.testimonials" />
                </Link>
              </div>
              <div className="navbar-item">
                <Link className="has-text-grey-dark" to="/about/">
                  <FormattedMessage id="components.nav.about" />
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/get-started/">
                  <button className="button is-primary is-outlined is-radiusless">
                    <FormattedMessage id="components.nav.cta" />
                  </button>
                </Link>
              </div>
              <div className="navbar-item">
                <LanguageSwitcher intl={intl} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={menuClass} style={{ zIndex: 50 }}>
        <div
          className="has-background-grey-dark"
          style={{ flex: 1, width: "100%" }}
        >
          <div className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <div className="navbar-item">
                  <Logo inverted />
                </div>
              </div>
            </div>
          </div>
          <div
            className="section has-text-centered has-text-white"
            style={{ lineHeight: "3" }}
          >
            <div>
              <Link
                onClick={toggleMenu}
                className="has-text-white"
                to="/#pricing"
              >
                <FormattedMessage id="components.nav.pricing" />
              </Link>
            </div>
            <hr className="is-inverted" />
            <div>
              <Link
                onClick={toggleMenu}
                className="has-text-white"
                to="/#testimonials"
              >
                <FormattedMessage id="components.nav.testimonials" />
              </Link>
            </div>
            <hr className="is-inverted" />
            <div>
              <Link
                onClick={toggleMenu}
                className="has-text-white"
                to="/about/"
              >
                <FormattedMessage id="components.nav.about" />
              </Link>
            </div>
            <hr className="is-inverted" />
            <div>
              <LanguageSwitcher intl={intl} />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              padding: "1.5rem",
              width: "100%",
            }}
          >
            <Link to="/get-started/">
              <button className="button is-primary is-medium is-fullwidth is-radiusless">
                <FormattedMessage id="components.nav.cta" />
              </button>
            </Link>
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="modal-close is-large"
          aria-label="close"
          style={{ zIndex: 50 }}
        ></button>
      </div>
    </div>
  )
})
