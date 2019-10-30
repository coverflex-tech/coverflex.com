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
import rightArrowImage from "../images/right-arrow.svg"
import slashImage from "../images/slash-big.svg"
import foldImage from "../images/home-illustration.png"
import protectionImage from "../images/home-protection.png"
import priceImage from "../images/home-price.png"
import benefitsImage from "../images/home-benefits.png"

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
          <div className="is-hidden-touch" style={{position: "absolute", width: "1080px", top: "-50%"}}>
            <Img fluid={data.dashboardDesktop.childImageSharp.fluid} />
          </div>
          <div className="is-hidden-desktop">
            <Img style={{margin: "3rem 3rem 0"}} fluid={data.dashboardMobile.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Saves = injectIntl(({intl}) => {
  const [index, setIndex] = useState(0)
  const whats = (intl.messages["components.proposition.savesWhat"] || "").split(",")
  const [classnames, setClassnames] = useState("animated fadeInUp fast")

  useEffect(() => {
    const exitAnim = setTimeout(() => setClassnames("animated fadeOutUp fast"), 800)
    setClassnames("animated fadeInUp fast")
    return () => clearTimeout(exitAnim)
  }, [index])

  useEffect(() => {
    if (!whats.length) return

    const pb = setInterval(() => setIndex((index + 1) % whats.length), 1400)
    return () => clearInterval(pb)
  }, [whats, index])

  return (
    <div className="section is-large">
      <div className="container">
        <p className="is-size-2-touch is-size-0 has-text-weight-bold">
          <span><FormattedMessage id="components.proposition.saves" /> </span>
          <span className={"is-inline-block has-text-primary " + classnames}>{whats[index]}.</span>
        </p>
        <br/>
        <br/>
        <div className="columns">
          <div className="column is-offset-5">
            <p className="is-size-5" dangerouslySetInnerHTML={{__html: intl.formatMessage({id: "components.proposition.savesText"})}}>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})

const Advantages = () => (
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
            <p className="is-size-5">
              <FormattedMessage id="components.advantages.protectionText" />
            </p>
          </div>
          <div className="column is-6">
            <div className="is-hidden-touch" style={{marginTop: "3rem"}}>
              <img src={protectionImage} alt=""/>
            </div>
            <div className="is-hidden-desktop" style={{margin: "0 auto -7.4rem"}}>
              <img src={protectionImage} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section is-large">
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-hidden-touch">
            <div style={{marginTop: "2rem"}}>
              <img src={priceImage} alt=""/>
            </div>
          </div>
          <div className="column is-5">
            <p className="title has-text-primary is-size-6-desktop is-size-7-touch is-uppercase">
              <FormattedMessage id="components.advantages.priceTitle" />
            </p>
            <h2 className="title is-size-2-desktop is-size-3-touch">
              <FormattedMessage id="components.advantages.priceSubtitle" />
            </h2>
            <p className="is-size-5">
              <FormattedMessage id="components.advantages.priceText" />
            </p>
          </div>
          <div className="column is-hidden-desktop">
            <div style={{margin: "0 auto -7.4rem"}}>
              <img src={priceImage} alt=""/>
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
            <div style={{margin: "0 auto -7.4rem"}}>
              <img src={benefitsImage} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const JoinBeta = () => (
  <div>
    <div className="columns is-marginless">
      <div className="column is-half has-text-centered has-background-grey-dark">
        <div className="section is-large">
          <p className="title is-size-2-desktop is-size-3-touch has-text-white">
            <FormattedMessage id="components.joinBeta.title" />
          </p>
        </div>
      </div>
      <Link to="/get-started/" className="column has-text-centered has-background-primary">
        <span className="is-block section is-large">
          <div className="title is-size-2-desktop is-size-3-touch has-text-white">
            <div className="level">
              <div className="level-item">
                <FormattedMessage id="components.joinBeta.button" />
              </div>
              <div className="level-item">
                <img src={rightArrowImage} alt=""/>
              </div>
            </div>
          </div>
        </span>
      </Link>
    </div>
  </div>
)

const Fold = ({ data }) => (
  <div className="section is-medium has-background-light is-relative">
    <div
      className="is-hidden-touch"
      style={{
        position: "absolute",
        top: "-6.25rem",
        left: "45%",
        width: "1226px"
      }}
    >
      <img src={slashImage} alt=""/>
    </div>
    <div className="container">
      <div
        className="columns is-hidden-touch"
        style={{ marginBottom: "-3rem" }}
      >
        <div className="column is-7">
          <div className="is-relative" style={{ zIndex: 10 }}>
            <h2>
              <p className="is-size-1">
                <FormattedMessage id="pages.index.title1" />
              </p>
              <p className="is-size-1 has-text-weight-bold">
                <FormattedMessage id="pages.index.title2" />
              </p>
            </h2>
            <br />
            <h3 className="is-size-5">
              <FormattedMessage id="pages.index.subtitle" />
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
          <img src={foldImage} width="420" alt="" style={{position: "absolute", marginLeft: "4rem"}}/>
        </div>
      </div>
      <div className="columns is-hidden-desktop is-centered has-text-centered">
        <div className="column is-8-tablet">
          <p className="is-size-3">
            <FormattedMessage id="pages.index.title1" />
          </p>
          <p className="is-size-3 has-text-weight-bold">
            <FormattedMessage id="pages.index.title2" />
          </p>
          <br />
          <p className="is-size-6">
            <FormattedMessage id="pages.index.subtitle" />
          </p>
          <div className="section"></div>
          <GetStartedForm />
          <br/>
          <div style={{ marginBottom: "-3rem" }}>
            <img src={foldImage} width="100%" alt="" style={{maxWidth: "420px"}}/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const PlansSection = () => (
  <div id="pricing" className="section is-large">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-10 has-text-centered">
          <p className="title is-size-2-desktop is-size-3-touch">
            <FormattedMessage id="pages.index.plans.title" />
          </p>
          <h3>
            <FormattedMessage id="pages.index.plans.subtitle" />
          </h3>
          <br />
          <br />
        </div>
      </div>
      <Plans />
    </div>
  </div>
)

export default injectIntl(props => (
  <Layout navbarClassname="is-light">
    <Fold {...props}/>
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half-desktop">
            <Customers
              dark
              title={props.intl.formatMessage({ id: "pages.index.customers" })}
            />
          </div>
        </div>
      </div>
    </div>
    <ValueProposition {...props}/>
    <div className="section is-hidden-touch"></div>
    <Saves />
    <Advantages />
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
