import React from "react"
import { Link } from "gatsby-plugin-intl"
import logo from "../images/logo.svg"
import invertedLogo from "../images/logo-inverted.svg"

export default ({ inverted }) => (
  <Link to="/">
    <img src={inverted ? invertedLogo : logo} alt="logo" />
  </Link>
)
