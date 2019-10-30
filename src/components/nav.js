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

const Navbar = ({ fixed, toggleMenu, className, linkClass, visible, intl }) => (
  <nav
    className={
      "navbar is-spaced " +
      (className || "is-white") +
      (fixed && visible === true
        ? " animated is-fixed-top slideInDown faster"
        : "") +
      (fixed && visible === false
        ? " animated is-fixed-top slideOutUp faster"
        : "")
    }
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Logo inverted={className.indexOf("primary") > -1} />
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
            <Link
              className={linkClass}
              activeClassName="has-text-weight-bold"
              to="/#pricing"
              partiallyActive
            >
              <FormattedMessage id="components.nav.pricing" />
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              className={linkClass}
              activeClassName="has-text-weight-bold"
              to="/#testimonials"
              partiallyActive
            >
              <FormattedMessage id="components.nav.testimonials" />
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              className={linkClass}
              activeClassName="has-text-weight-bold"
              to="/about/"
            >
              <FormattedMessage id="components.nav.about" />
            </Link>
          </div>
          <div className="navbar-item"></div>
          <div className="navbar-item">
            <LanguageSwitcher
              invert={className.indexOf("primary") > -1}
              intl={intl}
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default injectIntl(({ className = "", intl }) => {
  const [mobileMenuVisible, toggleMobileMenu] = useState(false)
  const [scrollMenuVisible, toggleScrollMenu] = useState()
  const [animating, setAnimating] = useState(false)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      const visible = scroll > currentScroll

      setScroll(currentScroll)
      toggleScrollMenu(visible)
    }

    setScroll(window.pageYOffset)

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scroll, scrollMenuVisible])

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

  const linkClass =
    className.indexOf("primary") > -1 ? "has-text-white" : "has-text-grey-dark"

  return (
    <div>
      <Navbar {...{ className, toggleMenu, linkClass, intl }} />
      {scrollMenuVisible !== undefined && (
        <Navbar
          fixed
          {...{
            className,
            toggleMenu,
            linkClass,
            intl,
            visible: scrollMenuVisible,
          }}
        />
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
            className="section has-text-centered has-text-white"
            onClick={toggleMenu}
            style={{ lineHeight: "3" }}
          >
            <div>
              <Link className="has-text-white" to="/#pricing">
                <FormattedMessage id="components.nav.pricing" />
              </Link>
            </div>
            <hr className="is-inverted" />
            <div>
              <Link className="has-text-white" to="/#testimonials">
                <FormattedMessage id="components.nav.testimonials" />
              </Link>
            </div>
            <hr className="is-inverted" />
            <div>
              <Link
                className="has-text-white"
                activeClassName="has-text-weight-bold"
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
