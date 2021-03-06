import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Plans from "../components/plans"
import Newsletter from "../components/newsletter"
import Customers from "../components/customers"
import Testimonials from "../components/testimonials"
import GetStartedForm from "../components/get-started-form"
import slashWhite from "../images/slash-small-white.svg"
import slashImage from "../images/slash-big.svg"
import foldImage from "../images/home-illustration.png"
import protectionImage from "../images/home-protection.png"
import priceImage from "../images/home-price.png"
import benefitsImage from "../images/home-benefits.png"
import generaliImage from "../images/logo-generali.svg"

const ValueProposition = ({ data }) => (
  <div className="section is-large">
    <div className="container">
      <div className="columns">
        <div className="column is-5-desktop">
          <h1 className="title is-size-2-desktop is-size-3-touch">
            <FormattedMessage id="components.proposition.allInOne" />
          </h1>
          <p className="is-size-5">
            <FormattedMessage id="components.proposition.allInOneText" />
          </p>
        </div>
        <div className="column">
          <div
            className="is-hidden-touch"
            style={{ position: "absolute", width: "1080px", top: "-50%" }}
          >
            <Img fluid={data.dashboardDesktop.childImageSharp.fluid} />
          </div>
          <div className="is-hidden-desktop">
            <Img
              style={{ margin: "3rem 3rem 0" }}
              fluid={data.dashboardMobile.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Saves = injectIntl(({ intl }) => {
  const [index, setIndex] = useState(0)
  const [classnames, setClassnames] = useState("animated fadeInUp faster")
  const whats = (intl.messages["components.proposition.savesWhat"] || "").split(
    ","
  )

  useEffect(() => {
    const fadeTimer = setTimeout(() => setClassnames("animated fadeOutUp faster"), 2200)
    const nextTimer = setTimeout(() => setIndex((index + 1) % whats.length), 2700)

    setClassnames("animated fadeInUp faster")

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(nextTimer)
    }
  }, [index, whats.length])

  return (
    <div className="section is-large">
      <div className="container">
        <p className="is-size-2-touch is-size-0 has-text-weight-bold">
          <span>
            <FormattedMessage id="components.proposition.saves" />{" "}
          </span>
          <span className={"is-inline-block has-text-primary " + classnames}>
            {whats[index]}.
          </span>
        </p>
        <br />
        <br />
        <div className="columns">
          <div className="column is-offset-5">
            <p
              className="is-size-5"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({
                  id: "components.proposition.savesText",
                }),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  )
})

const Advantages = ({ data, intl }) => (
  <div>
    <div className="section is-large has-background-grey-lighter">
      <div className="container">
        <div className="columns">
          <div className="column is-offset-1 is-5">
            <p className="title has-text-primary is-size-6-desktop is-size-7-touch is-uppercase">
              <FormattedMessage id="components.advantages.protectionTitle" />
            </p>
            <h2 className="title is-size-2-desktop is-size-3-touch">
              <FormattedMessage id="components.advantages.protectionSubtitle" />
            </h2>
            <p className="is-size-5" dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: "components.advantages.protectionText" })}}>
            </p>
          </div>
          <div className="column is-6">
            <div className="is-hidden-touch" style={{ margin: "2rem 0" }}>
              <img src={protectionImage} alt="" />
            </div>
            <div
              className="is-hidden-desktop"
              style={{ margin: "0 auto -7.4rem" }}
            >
              <img src={protectionImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section is-large">
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-hidden-touch">
            <div style={{ marginTop: "2rem" }}>
              <img src={priceImage} alt="" />
            </div>
          </div>
          <div className="column is-5">
            <p className="title has-text-primary is-size-6-desktop is-size-7-touch is-uppercase">
              <FormattedMessage id="components.advantages.priceTitle" />
            </p>
            < h2 className = "title is-size-2-desktop is-size-3-touch"
            dangerouslySetInnerHTML = {
              {
                __html: intl.formatMessage({
                  id: "components.advantages.priceSubtitle"
                })
              }
            } >
            </h2>
            <p className="is-size-5">
              <FormattedMessage id="components.advantages.priceText" />
            </p>
          </div>
          <div className="column is-hidden-desktop">
            <div style={{ margin: "0 auto -7.4rem" }}>
              <img src={priceImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section is-large has-background-grey-lighter">
      <div className="container">
        <div className="columns">
          <div className="column is-offset-1 is-5">
            <p className="title has-text-primary is-size-6-desktop is-size-7-touch is-uppercase">
              <FormattedMessage id="components.advantages.benefitsTitle" />
            </p>
            <h2 className="title is-size-2-desktop is-size-3-touch">
              <FormattedMessage id="components.advantages.benefitsSubtitle" />
            </h2>
            <p className="is-size-5">
              <FormattedMessage id="components.advantages.benefitsText" />
            </p>
          </div>
          <div className="column is-6">
            <div className="is-hidden-touch" style={{ marginTop: "3rem" }}>
              <img style={{ maxWidth: "520px" }} src={benefitsImage} alt="" />
            </div>
            <div className="is-hidden-desktop" style={{ margin: "0 auto -7.4rem" }}>
              <img src={benefitsImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const JoinBeta = () => (
  <div className="join-beta">
    <div className="section is-hidden-desktop has-background-grey-dark">
      <p className="title is-size-3 has-text-white">
        <FormattedMessage id="components.joinBeta.title" />
      </p>
      <GetStartedForm inverted />
    </div>
    <Link className="is-hidden-touch" to="/get-started/">
      <div className="columns is-marginless">
        <div className="column is-half has-text-centered has-background-grey-dark left">
          <div className="section is-large">
            <p className="title is-size-2 has-text-white">
              <FormattedMessage id="components.joinBeta.title" />
            </p>
          </div>
        </div>
        <div className="column has-text-centered has-background-primary">
          <span className="is-block section is-large">
            <div className="title is-size-2 has-text-white">
              <div className="level">
                <div className="level-item">
                  <FormattedMessage id="components.joinBeta.button" />
                </div>
                <div className="level-item">
                  <img src={slashWhite} alt="" />
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </Link>
  </div>
)

const Fold = ({ data, intl }) => (
  <div className="section is-medium has-background-light is-relative">
    <div
      className="is-hidden-touch"
      style={{
        position: "absolute",
        top: 0,
        left: "47.5%",
        width: "1226px",
      }}
    >
      <img src={slashImage} alt="" />
    </div>
    <div className="container">
      <div
        className="columns is-hidden-touch"
        style={{ marginBottom: "-2rem" }}
      >
        <div className="column is-7">
          <div className="is-relative" style={{ zIndex: 10 }}>
            <h2 className="is-size-1" dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: "pages.index.title" })}} style={{lineHeight: "1.25"}}>
            </h2>
            <br />
            < h3 className = "is-size-5"
            dangerouslySetInnerHTML = {
              {
                __html: intl.formatMessage({
                  id: "pages.index.subtitle"
                })
              }
            } >
            </h3>
            <br />
            <br />
            <div className="columns">
              <div className="column is-10">
                <GetStartedForm />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <img
            src={foldImage}
            width="420"
            alt=""
            style={{ position: "absolute", marginLeft: "4rem" }}
          />
        </div>
      </div>
      <div className="columns is-hidden-desktop is-centered has-text-centered">
        <div className="column is-8-tablet">
          <br/>
          <h2 className="is-size-3" dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: "pages.index.title" })}}>
          </h2>
          <br />
          <p className="is-size-6">
            <FormattedMessage id="pages.index.subtitle" />
          </p>
          <br/>
          <br/>
          <GetStartedForm />
          <br />
          <div style={{ marginBottom: "-2rem" }}>
            <img
              src={foldImage}
              width="100%"
              alt=""
              style={{ maxWidth: "420px" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const PlansSection = injectIntl(({intl}) => (
  <div id="pricing" className="section is-large">
    <div className="container has-text-centered">
      <p className="title is-size-1-desktop is-size-3-touch">
        <FormattedMessage id="pages.index.plans.title" />
      </p>
      <div className="columns is-centered">
        <div className="column is-6">
          <h3 className="is-size-5">
            <FormattedMessage id="pages.index.plans.subtitle" />
          </h3>
        </div>
      </div>
      <br />
      <br />
      <Plans />
      <div className="columns is-centered" style={{marginTop: "6rem"}}>
        <div className="column is-4">
          <div className="columns is-mobile">
            <div className="column has-text-left">
              <p className="is-size-5" dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: "pages.index.plans.policyProvider" })}}></p>
            </div>
            <div className="column is-narrow has-text-right">
              <img src={generaliImage} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))

export default injectIntl(props => (
  <Layout navbarClassname="is-light">
    <Fold {...props} />
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-5-widescreen is-6-desktop">
            <Customers
              dark
              title={props.intl.formatMessage({ id: "pages.index.customers" })}
            />
          </div>
        </div>
      </div>
    </div>
    <ValueProposition {...props} />
    <div className="section is-hidden-touch"></div>
    <Saves />
    <Advantages {...props} />
    <JoinBeta />
    <PlansSection />
    <Testimonials />
    <div className="section"></div>
    <Newsletter inverted />
  </Layout>
))

export const query = graphql`
  query {
    dashboardDesktop: file(relativePath: { eq: "dashboard-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    dashboardMobile: file(relativePath: { eq: "dashboard-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 160, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    foldImageMobile: file(
      relativePath: { eq: "home-illustration-mobile.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 478, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`
