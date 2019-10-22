import React, { useState } from "react"
import { graphql, navigate, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Plans from "../components/plans"
import CUSTOMERS from "../data/customers"
import TESTIMONIALS from "../data/testimonials"
import blockquoteImage from "../images/blockquote.svg"
import Newsletter from "../components/newsletter"

const GetStartedForm = ({ inverted }) => {
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState(false)

  const onChange = evt => setEmail(evt.target.value)
  const onSubmit = evt => {
    evt.preventDefault()
    setLoading(true)
    setTimeout(() => navigate("/get-started/" + (email ? `?email=${email}` : "")), 100)
    setTimeout(() => setLoading(false), 500)
  }

  return (
    <form onSubmit={onSubmit} >
      <div className="field">
        <input
          onChange={onChange}
          type="email"
          className="input is-medium is-primary"
          style={
            inverted ?
            {border: "solid 1px white", background: "rgba(255, 255, 255, .1)"} :
            {background: "rgba(240, 129, 77, 0.1)"}
          }
          placeholder="name@youremail.com"
          required
        />
      </div>
      <div className="field">
        <button
          type="submit"
          className={`button is-fullwidth is-primary is-medium ${inverted && 'is-inverted'} ${loading && 'is-loading'}`}
          disabled={loading}
        >
          Get Started
        </button>
      </div>
      <div className="field">
        <p className="is-size-7">
          <span>We care about your data. Check our </span>
          <Link to="/privacy-policy" className={inverted ? 'has-text-grey-dark' : 'has-text-primary'}>Privacy Policy</Link>.
        </p>
      </div>
    </form>
  )
}

const TrustedBy = () => (
  <div className="section is-medium">
    <div className="container">
      <p className="is-5 is-hidden-touch">Trusted by</p>
      <p className="is-5 is-hidden-desktop has-text-centered">Trusted by</p>
      <br/>
      <div className="columns is-multiline is-mobile is-vcentered">
        {CUSTOMERS.map((customer, key) => (
          <div key={key} className="column is-narrow-desktop is-half-mobile">
            <img className="image" src={customer.logo} alt="" style={{padding: "10px", opacity: "0.4"}}/>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ValueProposition = () => (
  <div>
    <div className="container has-background-light">
      <div className="section is-large">
        <div className="columns">
          <div className="column is-6 is-offset-1">
            <p className="title is-size-2-desktop is-size-3-touch">All-in-one digital insurance solution</p>
            <p className="is-size-5">
              Coverflex is the only fully-digital insurance solution where you buy, activate and
              manage all company and employee insurances with access to great benefits.
            </p>
          </div>
          <div className="column is-4">
          </div>
        </div>
        <div className="section"></div>
        <div className="columns">
          <div className="column is-6 is-offset-1">
            <p className="title is-size-2-desktop is-size-3-touch">Saves paper. Saves time. Saves money.</p>
            <p className="is-size-5">
              Sync Coverflex to your social security and ERP solution and automate all the admin
              tasks in a management dashboard. Finally, hassle free admin coupled with a top customer
              support team to assist you on every need. Including claims!
            </p>
          </div>
          <div className="column is-4">
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Advantages = () => (
  <div>
    <div className="container">
      <div className="section is-medium">
        <div className="columns">
          <div className="column is-offset-1 is-6">
            <p className="title is-size-2-desktop is-size-3-touch">We design our products to offer you the right protection</p>
            <p className="is-size-5">
              Our products and bundles are designed to ensure the right protection for your company
              at the best price. That is why we carefully define both covers and terms, based on
              historical claims data to  ensure you are covered for all relevant riks without
              overpaying.
            </p>
          </div>
          <div className="column is-4">
          </div>
        </div>
        <div className="section"></div>
        <div className="columns">
          <div className="column is-offset-1 is-6">
            <p className="title is-size-2-desktop is-size-3-touch">Cheaper, fixed monthly payment plans per employee</p>
            <p className="is-size-5">
              Pay per employee on a monthly basis. Customized plans to match your business profile
              and needs. The best possible offer, without excess capital and covers you don’t need.
              Only pay what you get.
            </p>
          </div>
          <div className="column is-4">
          </div>
        </div>
        <div className="section"></div>
        <div className="columns">
          <div className="column is-offset-1 is-6">
            <p className="title is-size-2-desktop is-size-3-touch">Reward your team with great benefits</p>
            <p className="is-size-5">
              Get you team onboard. Give all your employees full access  to the insurances and
              benefits you’re offering them. They pick what they want.
            </p>
          </div>
          <div className="column is-4">
          </div>
        </div>
      </div>
    </div>
  </div>
)

const JoinBeta = () => (
  <div>
    <div className="container">
      <div className="section is-medium has-background-primary has-text-white" style={{boxShadow: "500px 0 0 #F0814D"}}>
        <div>
          <div className="columns">
            <div className="column is-offset-1">
              <p className="title is-size-2-desktop is-size-3-touch has-text-white">Join the private beta</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-offset-1 is-4">
              <GetStartedForm inverted/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Fold = ({data}) => (
  <div className="section is-medium has-background-light">
    <div className="container">
      <div className="columns is-hidden-touch" style={{marginBottom: "-3rem"}}>
        <div className="column is-7">
          <div className="is-relative" style={{zIndex: 10}}>
            <p className="is-size-1">Modern companies</p>
            <p className="is-size-1 has-text-weight-bold">We got you covered</p>
            <br/>
            <p className="is-size-5">
              Get your company covered in minutes, with an insurance plan that
              rewards your team with great flexible benefits.
            </p>
            <br/>
            <div className="columns">
              <div className="column is-8">
                <GetStartedForm/>
              </div>
            </div>
          </div>
        </div>
        <div style={{position: "absolute", top: "-8.25rem", right: 0, width: "678px"}}>
          <Img fluid={data.foldImage.childImageSharp.fluid}/>
        </div>
      </div>
      <div className="columns is-hidden-desktop is-centered has-text-centered">
        <div className="column is-8-tablet">
          <p className="is-size-3">Modern companies</p>
          <p className="is-size-3 has-text-weight-bold">We got you covered</p>
          <br/>
          <p className="is-size-6">
            Get your company covered in minutes, with a Coverflex insurance plan that
            rewards your team with great flexible benefits.
          </p>
          <br/>
          <br/>
          <GetStartedForm/>
          <br/>
          <br/>
          <div style={{marginBottom: "-7rem"}}>
            <Img fluid={data.foldImageMobile.childImageSharp.fluid}/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const PlansSection = () => (
  <div id="pricing" className="section is-medium">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-10 has-text-centered">
          <p className="title is-size-2-desktop is-size-3-touch">Choose a plan that suits your needs</p>
          <p className="">
            We bundle different insurances and benefits so you get a better pricing for the right
            protection.
            <br/>
            By bundling the right insurances, we diversify risk and ensure a better
            pricing.
          </p>
          <br/>
          <br/>
        </div>
      </div>
      <Plans/>
    </div>
  </div>
)

const TestimonialsSection = ({ testimonials = [] }) => {
  const [selected, setSelected] = useState(testimonials[0])

  const Quote = ({last}) => <p><img src={blockquoteImage} alt="" style={last && {transform: "rotate(180deg)"}}/></p>

  const LogoList = ({ selected }) => (
    <div className="columns is-multiline is-mobile is-vcentered">
      {testimonials.map((testimonial, key) => (
          <div
            key={key}
            onClick={() => setSelected(testimonial)}
            className="column is-narrow-desktop is-half-mobile is-clickable"
            style={{opacity: selected === testimonial ? "1" : "0.4"}}
          >
            <img src={testimonial.logo} style={{padding: "10px"}}/>
          </div>
        )
      )}
    </div>
  )

  return !selected ? null : (
    <div id="testimonials" className="container">
      <div className="section">
        <p className="title is-size-2-desktop is-size-3-touch">You'll be in good company</p>
        <br/>
        <br/>
        <div>
          <div className="columns">
            <div className="column is-half-desktop is-hidden-touch">
              {<LogoList selected={selected}/>}
            </div>
            <div className="column is-half-desktop">
              <Quote/>
              <br/>
              <p className="is-size-3-desktop is-size-5-touch">
                {selected.quote}
              </p>
              <br/>
              <div className="columns">
                <div className="column is-narrow">
                  <img src={selected.picture} alt=""/>
                </div>
                <div className="column has-text-right">
                  <Quote last/>
                  <br/>
                  <p className="is-size-5 has-text-weight-bold">
                    {selected.name}
                  </p>
                  <p className="is-size-5 has-text-grey">
                    {selected.job}
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-hidden-desktop">
              <br/>
              {<LogoList selected={selected}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default (props) => (
  <Layout navbarClassname="is-light">
    <Fold {...props}/>
    <TrustedBy/>
    <ValueProposition/>
    <div className="section"></div>
    <Advantages/>
    <div className="section"></div>
    <JoinBeta/>
    <PlansSection/>
    <TestimonialsSection testimonials={TESTIMONIALS}/>
    <div className="section"></div>
    <Newsletter/>
  </Layout>
)

export const query = graphql`
  query {
    foldImage: file(relativePath: { eq: "home-illustration@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 678, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    foldImageMobile: file(relativePath: { eq: "home-illustration-mobile@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 478, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`
