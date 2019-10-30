import React from "react"
import Layout from "../components/layout"
import Newsletter from "../components/newsletter"
import Customers from "../components/customers"
import TEAM_MEMBERS from "../data/team_members"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import foldImage from "../images/about-illustration.png"
import slashImage from "../images/slash-big-white.svg"

const Header = () => (
  <div>
    <div className="section is-medium has-background-primary">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10-desktop has-text-centered">
            <h1 className="is-size-1-desktop is-size-3-touch has-text-white">
              <span><FormattedMessage id="pages.about.title1" /> </span>
              <br className="is-hidden-touch"/>
              <span className="has-text-weight-bold">
                <FormattedMessage id="pages.about.title2" />
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="section has-text-centered">
        <img className="floating" src={foldImage} alt="" width="250"/>
      </div>
    </div>
  </div>
)

const Intro = injectIntl(({intl}) => (
  <div className="section is-large has-background-light">
    <div
      className="is-hidden-touch"
      style={{
        position: "absolute",
        right: "55%",
        width: "1226px",
      }}
    >
      <img src={slashImage} alt=""/>
    </div>
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-7">
          <p className="is-size-4-desktop" dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: "pages.about.introText1" })}}>
          </p>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-9 has-text-centered">
          <div className="notification is-marginless"></div>
          <p className="is-family-secondary is-size-0 is-size-3-touch" dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: "pages.about.tagline" })}}>
          </p>
          <div className="notification is-marginless"></div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-7">
          <p className="is-size-4-desktop" dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: "pages.about.introText2" })}}>
          </p>
        </div>
      </div>
    </div>
  </div>
))

const Jobs = () => (
  <div className="">
    <p className="title is-size-2-desktop is-size-3-touch has-text-white has-text-centered">
      <FormattedMessage id="components.joinUs.openPositions" />
    </p>
    <br />
    <div className="container">
      <div className="columns">
        <div className="column">
          <Job
            position="Frontend Developer"
            location="Braga, Portugal"
            description="Remote Friendly<br>Product Team"
            />
        </div>
        <div className="column">
          <Job
            position="Sales Representative"
            location="Braga, Portugal"
            description="Remote Friendly<br>Sales Team"
            />
        </div>
        <div className="column">
          <Job
            position="HR Manager"
            location="Braga, Portugal"
            description="Remote Friendly<br>Logistics Team"
          />
        </div>
      </div>
    </div>
  </div>
)

const Job = ({ position, location, description }) => (
  <div className="notification has-text-grey-dark has-text-centered is-radiusless" style={{ height: "100%" }}>
    <p className="is-size-4-desktop has-text-weight-bold">{position}</p>
    <p className="is-size-5-desktop">{location}</p>
    <hr />
    <p className="is-size-5-desktop" dangerouslySetInnerHTML={{__html: description}}></p>
    <br />
    <a href="/" className="button is-primary is-outlined is-radiusless is-fullwidth is-medium has-text-weight-bold">
      <FormattedMessage id="components.joinUs.applyJob" />
    </a>
  </div>
)

const Benefits = () => (
  <div>
    <p className="title is-size-2-desktop is-size-3-touch has-text-white has-text-centered">
      <FormattedMessage id="components.joinUs.benefits.title" />
    </p>
    <div className="columns is-centered">
      <div className="column is-10">
        <div className="columns is-size-5-desktop is-size-6-touch is-gapless">
          <div className="column is-6">
            <div className="content">
              <ul className="is-list">
                <li>
                  <FormattedMessage id="components.joinUs.benefits.1" />
                </li>
                <li>
                  <FormattedMessage id="components.joinUs.benefits.2" />
                </li>
                <li>
                  <FormattedMessage id="components.joinUs.benefits.3" />
                </li>
                <li>
                  <FormattedMessage id="components.joinUs.benefits.4" />
                </li>
              </ul>
            </div>
          </div>
          <div className="column is-6">
            <div className="content">
              <ul className="is-list">
                <li>
                  <FormattedMessage id="components.joinUs.benefits.5" />
                </li>
                <li>
                  <FormattedMessage id="components.joinUs.benefits.6" />
                </li>
                <li>
                  <FormattedMessage id="components.joinUs.benefits.7" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const OurValues = () => (
  <div className="section">
    <div className="container">
      <p className="title is-size-2-desktop is-size-3-touch has-text-centered">
        <FormattedMessage id="components.ourValues.title" />
      </p>
      <br/>
      <div className="columns has-text-centered">
        <div className="column is-4">
          <div style={{borderRadius: "100%", backgroundColor: "rgba(240, 129, 77, 0.2)", width: "168px", height: "168px", margin: "2rem auto"}}></div>
          <p className="title is-family-secondary is-size-3-desktop is-size-4-touch">
            <FormattedMessage id="components.ourValues.transparency" />
          </p>
          <p className="is-size-5-desktop is-size-6-touch">
            <FormattedMessage id="components.ourValues.transparencyText" />
          </p>
        </div>
        <div className="column is-4">
          <div style={{borderRadius: "100%", backgroundColor: "rgba(240, 129, 77, 0.2)", width: "168px", height: "168px", margin: "2rem auto"}}></div>
          <p className="title is-family-secondary is-size-3-desktop is-size-4-touch">
            <FormattedMessage id="components.ourValues.passion" />
          </p>
          <p className="is-size-5-desktop is-size-6-touch">
            <FormattedMessage id="components.ourValues.passionText" />
          </p>
        </div>
        <div className="column is-4">
          <div style={{borderRadius: "100%", backgroundColor: "rgba(240, 129, 77, 0.2)", width: "168px", height: "168px", margin: "2rem auto"}}></div>
          <p className="title is-family-secondary is-size-3-desktop is-size-4-touch">
            <FormattedMessage id="components.ourValues.customers" />
          </p>
          <p className="is-size-5-desktop is-size-6-touch">
            <FormattedMessage id="components.ourValues.customersText" />
          </p>
        </div>
      </div>
    </div>
  </div>
)

const JoinUs = () => (
  <div id="careers" className="section is-large has-background-grey-dark has-text-white">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-6 has-text-centered">
          <p className="title is-family-secondary is-size-1-desktop is-size-3-touch has-text-white">
            <FormattedMessage id="components.joinUs.title" />
          </p>
          <br />
          <p className="is-size-5">
            <FormattedMessage id="components.joinUs.text" />
          </p>
        </div>
      </div>
      <div className="section"></div>
      <Benefits />
      <div className="section"></div>
      <Jobs />
    </div>
  </div>
)

const TeamMember = ({ name, job, photo, description, social = {} }) => (
  <div>
    <p>
      <img className="image" src={photo} alt="" />
    </p>
    <br />
    <p className="is-size-4 has-text-weight-bold">{name}</p>
    <p className="is-size-5">{job}</p>
    <br />
    <p className="is-size-6">{description}</p>
    <br />
    <p>
      {Object.keys(social).map(key => (
        <a key={key} href={social[key]} aria-label={`${name} ${key}`} target="_blank" rel="noopener noreferrer" className="icon is-medium has-text-grey-dark">
          <i className={`socicon-${key}`}></i>
        </a>
      ))}
    </p>
  </div>
)

const Team = ({ members }) => (
  <div className="section is-medium">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-6 has-text-centered">
          <p className="title is-size-2-desktop is-size-3-touch">
            <FormattedMessage id="components.team.title" />
          </p>
          <br />
          <p className="is-size-5">
            <FormattedMessage id="components.team.text" />
          </p>
          <br />
          <br />
        </div>
      </div>
      <div className="columns">
        {members.map((member, key) => (
          <div key={key} className="column is-4">
            <TeamMember key={key} {...member} />
          </div>
        ))}
      </div>
    </div>
  </div>
)

const AboutPage = props => (
  <Layout title="About" navbarClassname="is-primary">
    <Header />
    <Intro />
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-offset-1 is-4">
            <Customers
              title={props.intl.formatMessage({ id: "pages.about.customers" })}
            />
          </div>
        </div>
      </div>
    </div>
    <OurValues />
    <Team members={TEAM_MEMBERS} />
    <JoinUs />
    <Newsletter/>
  </Layout>
)

export default injectIntl(AboutPage)
