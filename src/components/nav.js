import React, { useState, useEffect } from "react"
import Logo from "./logo.js"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import { changeLocale } from "gatsby-plugin-intl/link"

const LanguageSwitcher = ({ invert, intl: { locale } }) => {
  const activeClass = "has-text-weight-bold"

  return (
    <div className={invert ? "has-text-white" : ""}>
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

const BurgerLink = ({ onClick }) => (
  <a
    href="/"
    onClick={onClick}
    role="button"
    className="navbar-burger burger"
    aria-label="menu"
    aria-expanded="false"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
)

export default injectIntl(({ className = "", intl }) => {
  const [mobileMenuVisible, toggleMobileMenu] = useState(false)
  const [scrollMenuVisible, toggleScrollMenu] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      toggleScrollMenu(window.pageYOffset > 140)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollMenuVisible])

  const toggleMenu = evt => {
    if (evt) evt.preventDefault()
    if (animating) return
    if (mobileMenuVisible) {
      setAnimating(true)
      setTimeout(() => {
        setAnimating(false)
        toggleMobileMenu(false)
      }, 500)
    } else {
      toggleMobileMenu(true)
    }
  }

  const menuClass =
    "modal animated faster fadeIn is-hidden-desktop" +
    (mobileMenuVisible ? " is-active" : "") +
    (animating && mobileMenuVisible ? " fadeOut" : "")

  const isPrimary = className.indexOf("primary") > -1

  const linkClass = isPrimary ? "has-text-white" : "has-text-grey-dark"

  const LetsTalk = () => (
    <Link
      className={
        "button has-text-weight-bold is-radiusless is-small " +
        (isPrimary ? "is-white has-text-primary" : "is-dark has-background-grey-dark")
      }
      to="/get-started/">
      <FormattedMessage id="components.nav.cta" />
    </Link>
  )

  return (
    <div className="is-uppercase">
      <nav className={"navbar is-spaced " + (className || "is-white")} role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Logo inverted={isPrimary} />
            </div>
            <div className="navbar-item is-hidden-desktop">
              <LetsTalk />
            </div>
            <BurgerLink onClick={toggleMenu}/>
          </div>
          <div className="navbar-end">
            <div className="navbar-menu">
              <div className="navbar-item">
                <Link className={linkClass} activeClassName="is-active has-text-weight-bold" to="/about/">
                  <FormattedMessage id="components.nav.about" />
                </Link>
              </div>
              <div className="navbar-item"></div>
              <div className="navbar-item">
                <LanguageSwitcher invert={isPrimary} intl={intl}/>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {(
        <nav
          className={
            "navbar is-spaced is-fixed-top " +
            (isPrimary ? "is-primary" : "is-white") +
            (scrollMenuVisible ? " is-visible" : "")
          }
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <div className="navbar-item">
                <Logo inverted={isPrimary} />
              </div>
              <div className="navbar-item is-hidden-desktop">
                <LetsTalk />
              </div>
              <BurgerLink onClick={toggleMenu}/>
            </div>
            <div className="navbar-end">
              <div className="navbar-menu">
                <div className="navbar-item">
                  <Link className={linkClass} activeClassName="is-active has-text-weight-bold" to="/about/">
                    <FormattedMessage id="components.nav.about" />
                  </Link>
                </div>
                <div className="navbar-item"></div>
                <div className="navbar-item">
                  <LetsTalk />
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
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
            className="section has-text-centered has-text-white is-uppercase"
            onClick={toggleMenu}
            style={{ lineHeight: "3" }}
          >
            <div>
              <Link
                className="has-text-white"
                activeClassName="is-active has-text-weight-bold"
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
            <Link
              className="button has-text-weight-bold is-radiusless is-primary is-fullwidth is-medium"
              to="/get-started/">
              <FormattedMessage id="components.nav.cta" />
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
