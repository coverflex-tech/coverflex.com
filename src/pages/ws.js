import React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SignupForm from "../components/signup-form"
import Customers from "../components/customers"
import slashImage from "../images/slash.svg"
import webSummitImage from "../images/websummit.png"

export default injectIntl(({intl, ...props}) => (
  <Layout title="Web Summit 2019" navbarClassname="is-light">
    <div className="section has-background-light is-relative">
      <div
        className="is-hidden-touch"
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "47.5%",
          width: "1226px",
        }}
        >
        <img src={slashImage} alt="" />
      </div>
      <div
        className="is-hidden-touch"
        style={{
          position: "absolute",
          left: "47.5%",
          top: "37.5%",
          maxWidth: "230px",
          marginLeft: "240px",
        }}
      >
        <img src={webSummitImage} alt="" />
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-6-widescreen is-7-desktop">
            <br/>
            <p className="title is-size-1-desktop is-size-3-touch has-text-weight-normal">
              <span>
                <FormattedMessage id="pages.webSummit.title1" />
              </span>
              <br />
              <span className="has-text-weight-bold">
                <FormattedMessage id="pages.webSummit.title2" />
              </span>
            </p>
            <br/>
            <p style={{lineHeight: 1}} className="is-size-3-desktop is-size-4-touch" dangerouslySetInnerHTML={{__html: intl.formatMessage({id:"pages.webSummit.subtitle"})}}>
            </p>
            <br/>
            <br/>
            <p className="is-size-5-desktop">
              <FormattedMessage id="pages.webSummit.text" />
            </p>
          </div>
        </div>
      </div>
      <div className="is-hidden-desktop is-relative" style={{marginBottom: "-6rem", paddingTop: "2rem"}}>
        <img src={slashImage} alt="" />
        <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "1rem"}}>
          <img src={webSummitImage} alt="" />
        </div>
      </div>
    </div>
    <div className="section is-hidden-desktop"></div>
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half-desktop">
            <Customers
              dark
              title={intl.formatMessage({ id: "pages.index.customers" })}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <h1 className="title is-size-1-desktop is-size-3-touch has-text-weight-normal">
              <span>
                <FormattedMessage id="pages.getStarted.title1" />
              </span>
              <br />
              <span className="has-text-weight-bold">
                <FormattedMessage id="pages.getStarted.title2" />
              </span>
            </h1>
            <p className="is-size-5">
              <FormattedMessage id="pages.webSummit.promo" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <SignupForm {...props} />
      </div>
    </div>
  </Layout>
))
