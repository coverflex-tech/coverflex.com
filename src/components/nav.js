import React, { useState } from "react"
import Logo from "./logo.js"
import { Link } from "gatsby"

export default ({ className }) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [animating, setAnimating] = useState(false)

  const toggleMenu = () => {
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

  const menuClass = (
    "modal animated faster fadeIn is-hidden-desktop" +
    (menuVisible ? " is-active" : "") +
    (animating && menuVisible ? " fadeOut" : "")
  )

  return (
    <div>
      <nav className={className ? `navbar ${className}` : "navbar"} role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Logo/>
            </div>
            <a onClick={toggleMenu} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-menu">
              <div className="navbar-item">
                <Link className="has-text-grey-dark" to="/#pricing">Pricing</Link>
              </div>
              <div className="navbar-item">
                <Link className="has-text-grey-dark" to="/#testimonials">Testimonials</Link>
              </div>
              <div className="navbar-item">
                <Link className="has-text-grey-dark" to="/about/">About</Link>
              </div>
              <div className="navbar-item">
                <Link to="/get-started/">
                  <button className="button is-primary is-outlined">
                    Let's talk
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={menuClass} style={{zIndex: 50}}>
        <div className="has-background-grey-dark" style={{flex: 1, width: "100%"}}>
          <div className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <div className="navbar-item">
                  <Logo inverted/>
                </div>
              </div>
            </div>
          </div>
          <div className="section has-text-centered" style={{lineHeight: "3"}}>
            <div>
              <Link onClick={toggleMenu} className="has-text-white" to="/#pricing">Pricing</Link>
            </div>
            <hr className="is-inverted"/>
            <div>
              <Link onClick={toggleMenu} className="has-text-white" to="/#testimonials">Testimonials</Link>
            </div>
            <hr className="is-inverted"/>
            <div>
              <Link onClick={toggleMenu} className="has-text-white" to="/about/">About</Link>
            </div>
          </div>
          <div style={{position: "absolute", bottom: 0, padding: "1.5rem", width: "100%"}}>
            <Link to="/get-started/">
              <button className="button is-primary is-medium is-fullwidth">
                Let's talk
              </button>
            </Link>
          </div>
        </div>
        <button onClick={toggleMenu} className="modal-close is-large" aria-label="close" style={{zIndex: 50}}></button>
      </div>
    </div>
  )
}
