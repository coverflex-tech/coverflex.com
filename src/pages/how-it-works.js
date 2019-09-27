import React from "react"
import "../styles/how_it_works.sass"
import phone from "../images/phone.svg"
import laptop from "../images/laptop.svg"
import Navbar from "../components/nav"
import Footer from "../components/footer"

const Phone = () => (
  <section
    className="section is-marginless"
    style={{ backgroundColor: "whitesmoke" }}
  >
    <Navbar />
    <div className="container ">
      <div className="tile is-ancestor">
        <div className="tile is-vertical ">
          <div className="tile">
            <div className="tile is-parent is-vertical ">
              <div className="tile is-child"></div>
              <div className="tile is-child ">
                <h1 className="subtitle">That's awesome, but</h1>
                <h2 className="title">How does it work?</h2>
              </div>
              <div className="tile is-child "></div>
            </div>
            <div className="tile is-parent is-1">
              <div className="tile is-parent"></div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child">
                <img src={phone}></img>
              </article>
            </div>
            <div className="tile is-parent is-vertical ">
              <article className="tile is-child"></article>
              <article className="tile is-child">
                <h1 className="subtitle">
                  Transparent and easier to understand insurance products that
                  respond to your needs.
                </h1>
              </article>
              <article className="tile is-child">
                <h1 className="subtitle">
                  Simple and fully digital policy management & claims process.
                </h1>
              </article>
              <article className="tile is-child"></article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Setup = () => (
  <section className="section">
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column ">
          <div className="has-text-centered ">
            <p className="subtitle">Let’s start from the top</p>
            <p className="title">Painless and automated setup</p>
          </div>

          <br />
          <br />
          <div className="columns ">
            <div className="column ">
              <h5 className="setup-number">01</h5>

              <div className="columns ">
                <div className="column is-1"></div>
                <div className="column ">
                  <h2 className="title">Select a plan that works for you</h2>
                  <h1 className="subtitle">
                    Pay per employee, per month, or get in touch with us for a
                    custom solution that fits you business model and market
                    needs
                  </h1>
                </div>
              </div>
            </div>
            <div className="column ">
              <h5 className="setup-number">02</h5>
              <div className="columns ">
                <div className="column is-1"></div>
                <div className="column ">
                  <h2 className="title">Select a plan that works for you</h2>
                  <h1 className="subtitle">
                    Pay per employee, per month, or get in touch with us for a
                    custom solution that fits you business model and market
                    needs
                  </h1>
                </div>
              </div>
            </div>
            <div className="column ">
              <h5 className="setup-number">03</h5>
              <div className="columns ">
                <div className="column is-1"></div>
                <div className="column ">
                  <h2 className="title">Select a plan that works for you</h2>
                  <h1 className="subtitle">
                    Pay per employee, per month, or get in touch with us for a
                    custom solution that fits you business model and market
                    needs
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Support = () => (
  <section className="section ">
    <div className="container notification">
      <div className="section">
        <p className="is-size-7" style={{ paddingBottom: "25px" }}>
          Supported Integration
        </p>
        <div className="is-flex" style={{ justifyContent: "space-between" }}>
          <FakeCustomer />
          <FakeCustomer />
          <FakeCustomer />
          <FakeCustomer />
          <FakeCustomer />
        </div>
      </div>
    </div>
  </section>
)

const FakeCustomer = () => (
  <div>
    <figure className="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png" />
    </figure>
  </div>
)

const Dashboard = () => (
  <div className="section">
    <div className="container">
      <div className="hero ">
        <div className="hero-body">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <p className="is-size-5">Stay in control</p>
              <p className="is-size-3 has-text-weight-bold">
                Monitor everything in one place
              </p>
              <br />
              <br />
              <p className="is-size-5 has-text-weight-bold">
                Digital Claims Manager
              </p>
              <p>
                Get claim status and updates on the go, solve everything with
                clicks isntead of papers. All the required information isn
                neatly ornized in the same place for you to access whenever you
                want.
              </p>
            </div>
            <div className="column">
              <img src={laptop} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Start = () => (
  <section className="section ">
    <div className="container notification">
      <div className="section">
        <div className="is-flex" style={{ justifyContent: "space-between" }}>
          <div>
            <p className="subtitle">Select your plan</p>
            <p className="title">Are you ready to start?</p>
            <div className="button is-primary is-rounded is-medium">
              <b className="is-size-6">Get started</b>
            </div>
          </div>
          <div>
            <p className="subtitle">Support</p>
            <p className="title">Have specific needs?</p>
            <b className="is-size-6" style={{ color: "#F0814D" }}>
              Let's talk
            </b>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default () => (
  <div>
    <Phone />
    <Setup />
    <Support />
    <Dashboard />
    <Start />
    <Footer />
  </div>
)
