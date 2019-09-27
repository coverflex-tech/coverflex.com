import React from "react"
import Layout from "../components/layout.js"
import Footer from "../components/footer.js"
import Plans from "../components/plans.js"
import { graphql } from "gatsby"
import FullImage from "../components/full-image.js"
import Img from "gatsby-image"

const Intro = () => (
  <div className="container">
    <div className="section is-medium">
      <div className="columns is-vcentered">
        <div className="column is-6">
          <div className="">
            <div className="is-size-1">
              <p>Digital Insurance</p>
              <p className="has-text-weight-bold">for Digital Natives</p>
            </div>
            <br />
            <div className="is-size-5">
              <p>A full insurance experience for a new generation</p>
            </div>
            <br />
            <div className="field is-grouped">
              <div className="control">
                <div className="button is-primary is-rounded is-medium">
                  <span className="is-size-6">Try it now</span>
                </div>
              </div>
              <div className="control">
                <div className="button is-light is-rounded is-medium">
                  <span className="is-size-6">How it works</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const FakeCustomer = () => (
  <figure className="image is-128x128">
    <img src="https://bulma.io/images/placeholders/128x128.png" />
  </figure>
)

const TrustedBy = () => (
  <div className="container">
    <div className="section">
      <p className="title is-7">Trusted by</p>
      <div className="is-flex" style={{ justifyContent: "space-around" }}>
        <FakeCustomer />
        <FakeCustomer />
        <FakeCustomer />
        <FakeCustomer />
        <FakeCustomer />
      </div>
    </div>
  </div>
)

const Newsletter = () => (
  <div className="section">
    <div className="container">
      <div className="hero is-medium is-light has-text-centered">
        <div className="hero-body">
          <div className="">
            <p className="is-size-1">We can’t insure your inbox.</p>
            <p className="is-size-1 title">But we’ll spice it up for sure.</p>
            <p className="has-text-grey-light">
              Don’t worry, we won’t do it more than once a week
            </p>
            <br />
          </div>
          <div className="column is-6 is-offset-3">
            <div style={{ borderBottom: "solid 2px #F0814D" }}>
              <input
                className="is-size-6"
                style={{
                  background: 0,
                  height: "3rem",
                  border: 0,
                  outline: 0,
                  width: "500px",
                }}
                type="text"
                placeholder="Your email address"
              />
              <button className="button is-primary is-rounded is-medium">
                <span className="is-size-6 has-text-weight-bold">Sign up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Pricing = () => (
  <div className="hero">
    <div className="hero-body has-text-centered">
      <div className="column is-8 is-offset-2">
        <p className="is-size-5">Pricing</p>
        <p className="title is-size-2">
          Cheaper than a cup of coffee per day for each employee.
        </p>
        <p className="is-size-6">
          <span className="has-text-grey-light">Seriously. </span>
          <span className="has-text-primary">Check this out.</span>
        </p>
        <br />
      </div>
    </div>
  </div>
)

const HowItWorks = props => (
  <div className="section is-medium">
    <div className="container">
      <div className="has-text-centered">
        <p className="is-size-5">You can talk the talk, but</p>
        <p className="is-size-4 has-text-weight-bold">How does it work?</p>
        <Img
          fluid={props.data.howItWorks.childImageSharp.fluid}
          alt="how it works"
          style={{ marginBottom: "-50%", position: "relative", zIndex: -1 }}
        />
      </div>
    </div>
  </div>
)

const Slideshow = props => (
  <div className="section">
    <div className="container">
      <div className="hero is-light">
        <div className="hero-body">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <Img fluid={props.data.homeSlide.childImageSharp.fluid} alt="" />
            </div>
            <div className="column is-5">
              <p className="is-size-5">Our insurance is</p>
              <p className="is-size-3 has-text-weight-bold">
                Easy to understand, quick to buy &amp; manage for the whole team
              </p>
              <br />
              <br />
              <p className="is-size-5 has-text-weight-bold">
                Simplified purchase
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Audience = () => (
  <div className="section">
    <div className="container has-background-light">
      <div className="section" style={{ paddingTop: "6rem" }}>
        <div className="columns">
          <div className="column is-6">
            <div className="columns">
              <div className="column is-8">
                <p className="title">
                  Available for digital businesses and teams
                </p>
                <p className="has-text-grey-light">
                  Curabitur dictum lacus suscipit tortor viverra, nec faucibus
                  nibh commodo.
                </p>
                <br />
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <p className="title is-size-5">Tech and Science</p>
                <p className="title is-size-5">Financial Services</p>
                <p className="title is-size-5">Software Development</p>
                <p className="title is-size-5">Digital</p>
              </div>
              <div className="column is-6">
                <p className="title is-size-5">HR and Consultancy</p>
                <p className="title is-size-5">Media Companies</p>
                <p className="title is-size-5">Marketing and PR</p>
                <p className="title is-size-5">Legal</p>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div
              className="column is-8 is-offset-2"
              style={{ marginTop: "-9rem", position: "relative" }}
            >
              <div
                style={{
                  fontSize: "7rem",
                  left: "-15rem",
                  lineHeight: "6rem",
                  maxWidth: "20rem",
                  position: "absolute",
                  textAlign: "right",
                  top: "4rem",
                  wordBreak: "break-all",
                  zIndex: 1,
                }}
              >
                <p className="has-text-primary has-text-weight-bold">
                  Financial
                </p>
              </div>
              <figure className="image is-square">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <br />
              <p className="has-text-weight-bold">
                &quot;We want our team to feel safe, and to be insured… but the
                time I spend doing it is crazy. This sounds amazing.&quot;
              </p>
              <br />
              <p>Rui Rocha Costa</p>
              <p className="has-text-grey-light">Co-founder @ Eat tasty</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const GetStarted = () => (
  <div className="section">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-6">
            <p className="is-size-5">We got you covered.</p>
            <p className="title">Let’s make great things together.</p>
            <br />
            <div className="button is-primary is-rounded is-medium">
              <span className="is-size-6">Get Started</span>
            </div>
          </div>
          <div className="column is-6">
            <div className="columns is-multiline">
              <div className="column is-4">
                <FakeCustomer />
              </div>
              <div className="column is-4">
                <FakeCustomer />
              </div>
              <div className="column is-4">
                <FakeCustomer />
              </div>
              <div className="column is-4">
                <FakeCustomer />
              </div>
              <div className="column is-4">
                <FakeCustomer />
              </div>
              <div className="column is-4">
                <FakeCustomer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const query = graphql`
  query {
    homeSlide: file(relativePath: { eq: "home-slide-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 448, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    howItWorks: file(relativePath: { eq: "home-how-it-works.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1213, maxHeight: 1905, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`

export default () => (
  <Layout style={{ background: "url(home-top.jpg) top center no-repeat" }}>
    <Intro />
    <TrustedBy />
    <Slideshow data={data} />
    <HowItWorks data={data} />
    <Audience />
    <Pricing />
    <Plans />
    <div className="section"></div>
    <FullImage src="home-splash-1.jpg" height="525" />
    <GetStarted />
    <Newsletter />
  </Layout>
)
