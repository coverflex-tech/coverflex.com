import React from "react";
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import Plans from "../components/plans.js"
import Faq from "../components/faq.js"

const Header = () => (
  <section className="section" style={{background: "#F7F7F7"}}>
    <div className="container">
      <div className="level">
        <p className="is-size-5 has-text-weight-bold has-italic level-item">Pricing</p>
      </div>
      <div className="level">
        <h1 className="is-size-3 has-text-weight-bold level-item">Plans that suit your team's needs</h1>
      </div>
    </div>
  </section>
)

const TryIt = () => (
  <section className="section">
    <div className="container">
      <div className="level columns">
        <div className="column">
          <p className="is-size-5 has-text-weight-bold has-italic">Try it before you buy it</p>
          <h1 className="is-size-3 has-text-weight-bold">Your first month is on us</h1>
        </div>
        <div className="column">
          <p className="is-size-6 has-text-weight-bold is-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna. Aliquam viverra odio sed urna pharetra, non suscipit turpis eleifend. Aliquam sit amet sollicitudin ipsum. Pellentesque pellentesque condimentum feugiat. Etiam nec nisl nulla. Nam molestie at nisi eu faucibus. Phasellus felis augue, vulputate non eros nec, volutpat pretium ante.</p>
        </div>
      </div>
    </div>
  </section>
)

const PlansDescription = () => (
  <section className="section">
    <div className="container">
      <div className="hero is-light" style={{height: "678px", position: "relative"}} >
        <div className="hero-body">
          <div className="level">
            <p className="is-size-5 has-text-weight-bold has-italic level-item">Pricing</p>
          </div>
          <div className="level">
            <h1 className="is-size-3 has-text-weight-bold level-item">Plans that suit your team's needs</h1>
          </div>
          <div className="level columns">
            <div className="column">
              <p className="is-size-5 has-text-weight-bold">Dashboard and App Access</p>
              <p className="is-size-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna.</p>
            </div>
            <div className="column">
              <p className="is-size-5 has-text-weight-bold">24/7 Support</p>
              <p className="is-size-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna.</p>
            </div>
            <div className="column">
              <p className="is-size-5 has-text-weight-bold">Knowledge base access</p>
              <p className="is-size-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{position: "absolute", bottom: "-350px"}}>
        <img src="plans-macbook.png" alt="" />
      </div>
    </div>
  </section>
)

const FaqSection = () => (
  <section className="section" style={{margin: "20rem 0 0"}}>
    <div className="container">
      <div className="level">
        <p className="is-size-5 has-text-weight-bold has-italic level-item">Support</p>
      </div>
      <div className="level">
        <h1 className="is-size-3 has-text-weight-bold level-item">Frequently Asked Questions</h1>
      </div>
      <Faq />
    </div>
  </section>
)

const PlansPage = () => (
  <div>
    <Nav />
    <Header />
    <section className="section">
      <Plans />
    </section>
    <TryIt />
    <PlansDescription />
    <FaqSection />
    <Footer />
  </div>
)

export default PlansPage
