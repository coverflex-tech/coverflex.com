import React from "react"
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import Plans from "../components/plans.js"
import FullImage from "../components/full-image.js"

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
            <br/>
            <div className="is-size-5">
              <p>A full insurance experience for a new generation</p>
            </div>
            <br/>
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
  <div>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png"/>
    </figure>
  </div>
)

const TrustedBy = () => (
  <div className="container">
    <div className="section">
      <p className="title is-7">Trusted by</p>
      <div className="is-flex" style={{justifyContent: 'space-around'}}>
        <FakeCustomer/>
        <FakeCustomer/>
        <FakeCustomer/>
        <FakeCustomer/>
        <FakeCustomer/>
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
            <p className="has-text-grey-light">Don’t worry, we won’t do it more than once a week</p>
            <br/>
          </div>
          <div className="column is-6 is-offset-3">
            <div style={{borderBottom: 'solid 2px #F0814D'}}>
              <input
                className="is-size-6"
                style={{background: 0, height: '3rem', border: 0, outline: 0, width: '500px' }}
                type="text" placeholder="Your email address"
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
        <p className="title is-size-2">Cheaper than a cup of coffee per day for each employee.</p>
        <p className="is-size-6">
          <span className="has-text-grey-light">Seriously. </span>
          <span className="has-text-primary">Check this out.</span>
        </p>
        <br/>
      </div>
    </div>
  </div>
)

const HowItWorks = () => (
  <div className="section is-medium">
    <div className="container">
      <div className="has-text-centered">
        <p className="is-size-5">You can talk the talk, but</p>
        <p className="is-size-4 has-text-weight-bold">How does it work?</p>
        <img src="home-how-it-works.jpg" alt="how it works" style={{marginBottom: '-50%', position: 'relative', zIndex: -1}}/>
      </div>
    </div>
  </div>
)

const Slideshow = () => (
  <div className="section">
    <div className="container">
      <div className="hero is-light">
        <div className="hero-body">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <img src="home-slide-1.png" alt="" style={{margin: '-3rem -2rem -14rem'}}/>
            </div>
            <div className="column is-5">
              <p className="is-size-5">Our insurance is</p>
              <p className="is-size-3 has-text-weight-bold">Easy to understand, quick to buy &amp; manage for the whole team</p>
              <br/>
              <br/>
              <p className="is-size-5 has-text-weight-bold">Simplified purchase</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default () => (
  <div style={{background: 'url(home-top.jpg) top center no-repeat'}}>
    <Nav />
    <Intro />
    <TrustedBy />
    <Slideshow />
    <HowItWorks />
    <Pricing />
    <Plans />
    <div className="section is-medium"></div>
    <FullImage src="home-splash-1.jpg" height="525"/>
    <Newsletter />
    <Footer />
  </div>
)
