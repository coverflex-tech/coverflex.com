import React, { Component } from "react"
import coverflex from "../images/how_it_works/coverflex.svg"
import "../styles/navbar.sass"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      active: false,
    }
  }
  handleClick(e) {
    this.setState(prevState => {
      return { active: !prevState.active }
    })
  }
  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
        style={{ background: "transparent" }}
      >
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={coverflex}></img>
          </a>

          <a
            role="button"
            className={
              "navbar-burger burger" + (this.state.active ? " is-active" : "")
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="cfNavbar"
            onClick={this.handleClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="cfNavbar"
          className={"navbar-menu" + (this.state.active ? " is-active" : "")}
        >
          <div className="navbar-end">
            <a className="navbar-item">About</a>
            <a className="navbar-item">How it works</a>
            <a className="navbar-item">Plans</a>
            <a className="navbar-item">Support</a>
            <div className="navbar-item">
              <a className="button is-primary">
                <div className="text-button">Dashboard</div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
