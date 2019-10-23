import React, { useState } from "react"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Plans from "../components/plans"
import Newsletter from "../components/newsletter"
import Customers from "../components/customers"
import TESTIMONIALS from "../data/testimonials"
import blockquoteImage from "../images/blockquote.svg"

const GetStartedForm = injectIntl(({ intl, inverted }) => {
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
          placeholder={intl.formatMessage({ id: "components.getStarted.email" })}
          required
        />
      </div>
      <div className="field">
        <button
          type="submit"
          className={`button is-fullwidth is-primary is-medium ${inverted && 'is-inverted'} ${loading && 'is-loading'}`}
          disabled={loading}
        >
          <FormattedMessage id="components.getStarted.button"/>
        </button>
      </div>
      <div className="field">
        <p className="is-size-7">
          <span><FormattedMessage id="components.privacyPolicyNotice.text"/> </span>
          <Link to="/privacy-policy" className={inverted ? 'has-text-grey-dark' : 'has-text-primary'}>
            <FormattedMessage id="components.privacyPolicyNotice.title"/>
          </Link>.
        </p>
      </div>
    </form>
  )
})

const ValueProposition = () => (
  <div>
    <div className="container has-background-light">
      <div className="section is-large">
        <div className="columns">
          <div className="column is-6 is-offset-1">
            <p className="title is-size-2-desktop is-size-3-touch">
              <FormattedMessage id="components.proposition.allInOne"/>
            </p>
            <p className="is-size-5">
              <FormattedMessage id="components.proposition.allInOneText"/>
            </p>
          </div>
          <div className="column is-4">
          </div>
        </div>
        <div className="section"></div>
        <div className="columns">
          <div className="column is-6 is-offset-1">
            <p className="title is-size-2-desktop is-size-3-touch">
              <FormattedMessage id="components.proposition.saves"/>
            </p>
            <p className="is-size-5">
              <FormattedMessage id="components.proposition.savesText"/>
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
            <p className="title is-size-2-desktop is-size-3-touch">
              <FormattedMessage id="components.advantages.protection"/>
            </p>
            <p className="is-size-5">
              <FormattedMessage id="components.advantages.protectionText"/>
            </p>
          </div>
          <div className="column is-4">
          </div>
        </div>
        <div className="section"></div>
        <div className="columns">
          <div className="column is-offset-1 is-6">
            <p className="title is-size-2-desktop is-size-3-touch">
              <FormattedMessage id="components.advantages.price"/>
            </p>
            <p className="is-size-5">
              <FormattedMessage id="components.advantages.priceText"/>
            </p>
          </div>
          <div className="column is-4">
          </div>
        </div>
        <div className="section"></div>
        <div className="columns">
          <div className="column is-offset-1 is-6">
            <p className="title is-size-2-desktop is-size-3-touch">
              <FormattedMessage id="components.advantages.benefits"/>
            </p>
            <p className="is-size-5">
              <FormattedMessage id="components.advantages.benefitsText"/>
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
              <p className="title is-size-2-desktop is-size-3-touch has-text-white">
                <FormattedMessage id="components.joinBeta.title"/>
              </p>
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

const Fold = ({ data }) => (
  <div className="section is-medium has-background-light">
    <div className="container">
      <div className="columns is-hidden-touch" style={{marginBottom: "-3rem"}}>
        <div className="column is-7">
          <div className="is-relative" style={{zIndex: 10}}>
            <p className="is-size-1">
              <FormattedMessage id="pages.index.title1"/>
            </p>
            <p className="is-size-1 has-text-weight-bold">
              <FormattedMessage id="pages.index.title2"/>
            </p>
            <br/>
            <p className="is-size-5">
              <FormattedMessage id="pages.index.subtitle"/>
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
          <p className="is-size-3">
            <FormattedMessage id="pages.index.title1"/>
          </p>
          <p className="is-size-3 has-text-weight-bold">
            <FormattedMessage id="pages.index.title2"/>
          </p>
          <br/>
          <p className="is-size-6">
            <FormattedMessage id="pages.index.subtitle"/>
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
          <p className="title is-size-2-desktop is-size-3-touch">
            <FormattedMessage id="pages.index.plans.title"/>
          </p>
          <p className="">
            <FormattedMessage id="pages.index.plans.subtitle"/>
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
        <p className="title is-size-2-desktop is-size-3-touch">
          <FormattedMessage id="components.testimonials.title"/>
        </p>
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

export default injectIntl((props) => (
  <Layout navbarClassname="is-light">
    <Fold {...props}/>
    <Customers dark title={props.intl.formatMessage({ id: "pages.index.customers" })}/>
    <ValueProposition {...props}/>
    <div className="section"></div>
    <Advantages {...props}/>
    <div className="section"></div>
    <JoinBeta {...props}/>
    <PlansSection {...props}/>
    <TestimonialsSection testimonials={TESTIMONIALS} {...props}/>
    <div className="section"></div>
    <Newsletter {...props}/>
  </Layout>
))

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
