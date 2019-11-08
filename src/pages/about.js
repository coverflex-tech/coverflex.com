import React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Newsletter from "../components/newsletter"
import Customers from "../components/customers"
import TEAM_MEMBERS from "../data/team_members"
import INVESTORS from "../data/investors"
import foldImage from "../images/about-illustration.png"
import slashImage from "../images/slash-big-white.svg"
import transparencyImage from "../images/about-transparency.png"
import passionImage from "../images/about-passion.png"
import customersImage from "../images/about-customers.png"

const Header = () => (
  <div>
    <div className="section is-medium has-background-primary">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-11-desktop has-text-centered">
            <h1 className="is-size-1-desktop is-size-3-touch has-text-white" style={{lineHeight: "1.25"}}>
              <span>
                <FormattedMessage id="pages.about.title1" />{" "}
              </span>
              <br className="is-hidden-touch" />
              <span className="has-text-weight-bold">
                <FormattedMessage id="pages.about.title2" />
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="section has-text-centered is-hidden-touch">
        <img
          src={foldImage}
          alt=""
          style={{ maxWidth: "990px", margin: "0 auto -10.4rem" }}
        />
      </div>
    </div>
    <div
      className="is-hidden-desktop has-background-primary"
      style={{ overflow: "hidden" }}
    >
      <img
        src={foldImage}
        alt=""
        style={{
          width: "115%",
          maxWidth: "none",
          transform: "translateX(-5%)",
          margin: "0 0 -0.4rem",
        }}
      />
    </div>
  </div>
)

const Intro = injectIntl(({ intl }) => (
  <div className="section is-medium has-background-light is-relative">
    <div className="is-hidden-desktop">
      <br/>
      <br/>
    </div>
    <div
      className="is-hidden-touch"
      style={{
        position: "absolute",
        top: "12rem",
        right: "50%",
        width: "1226px",
      }}
    >
      <img src={slashImage} alt="" />
    </div>
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-7">
          <p
            className="is-size-4-desktop is-size-5-touch"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "pages.about.introText1" }),
            }}
          ></p>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-9 has-text-centered">
          <br/>
          <br/>
          <p
            className="is-family-secondary is-size-0 is-size-3-touch"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "pages.about.tagline" }),
            }}
          ></p>
          <br/>
          <br/>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-7">
          <p
            className="is-size-4-desktop is-size-5-touch"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "pages.about.introText2" }),
            }}
          ></p>
        </div>
      </div>
    </div>
  </div>
))

const Jobs = () => (
  <div className="">
    <h2 className="title is-size-2-desktop is-size-3-touch has-text-white has-text-centered">
      <FormattedMessage id="components.joinUs.openPositions" />
    </h2>
    <br />
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-4">
          <Job
            position="Backend Engineer"
            location="Porto / Lisbon (PT)"
            description="Remote Friendly<br>Tech Team"
            url="https://www.notion.so/coverflex/Backend-Engineer-c66d6f548d7741e283062ec7cc6c1c0b"
          />
        </div>
        <div className="column is-4">
          <Job
            position="Frontend Engineer"
            location="Porto / Lisbon (PT)"
            description="Remote Friendly<br>Tech Team"
            url="https://www.notion.so/coverflex/Frontend-Engineer-0ec94b6a67fc4108a392b6cbc71a3655"
          />
        </div>
        <div className="column is-4">
          <Job
            position="Fullstack Engineer"
            location="Porto / Lisbon (PT)"
            description="Remote Friendly<br>Tech Team"
            url="https://www.notion.so/coverflex/Full-Stack-Engineer-a6467d58b89540e792b68bf2f4d3c95a"
          />
        </div>
        <div className="column is-4">
          <Job
            position="Product Designer"
            location="Porto / Lisbon (PT)"
            description="Remote Friendly<br>Product Team"
            url="https://www.notion.so/coverflex/Product-Designer-0c03c5e0fa264ffcb020b82991636475"
          />
        </div>
        <div className="column is-4">
          <Job
            position="Product Manager"
            location="Porto / Lisbon (PT)"
            description="Remote Friendly<br>Product Team"
            url="https://www.notion.so/coverflex/Product-Manager-40bd69172a0841ef85b6a38ed6fa7796"
          />
        </div>
        <div className="column is-4">
          <Job
            position="Performance Marketeer"
            location="Porto / Lisbon (PT)"
            description="Remote Friendly<br>Marketing Team"
            url="https://www.notion.so/coverflex/Performance-Marketeer-7c1ac5b3e2254af18ebed18a15f9f271"
          />
        </div>
        <div className="column is-4">
          <Job
            position="Brand & Content Marketeer"
            location="Porto / Lisbon (PT)"
            description="Remote Friendly<br>Marketing Team"
            url="https://www.notion.so/coverflex/Brand-Content-Marketeer-02bfc43b512e4ada9fc7f082d354bcab"
          />
        </div>
      </div>
    </div>
  </div>
)

const Job = ({ position, location, description, url }) => (
  <div
    className="notification has-text-grey-dark has-text-centered is-radiusless"
    style={{ height: "100%" }}
  >
    <p className="is-size-4-desktop has-text-weight-bold">{position}</p>
    <p className="is-size-5-desktop">{location}</p>
    <hr />
    <p
      className="is-size-5-desktop"
      dangerouslySetInnerHTML={{ __html: description }}
    ></p>
    <br />
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="button is-primary is-outlined is-radiusless is-fullwidth is-medium has-text-weight-bold"
    >
      <FormattedMessage id="components.joinUs.applyJob" />
    </a>
  </div>
)

const Benefits = () => (
  <div>
    <h2 className="title is-size-2-desktop is-size-3-touch has-text-white has-text-centered">
      <FormattedMessage id="components.joinUs.benefits.title" />
    </h2>
    <div className="columns is-centered">
      <div className="column is-10">
        <div className="columns is-5-desktop is-5-touch is-gapless">
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
              <br/>
              <p className="has-text-grey-light">
                <FormattedMessage id="components.joinUs.remember" />
              </p>
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
      <br />
      <div className="columns has-text-centered">
        <div className="column is-4">
          <div>
            <img
              src={transparencyImage}
              alt=""
              style={{ maxHeight: "168px" }}
            />
          </div>
          <br />
          <h2 className="is-family-secondary is-size-3-desktop is-size-4-touch">
            <FormattedMessage id="components.ourValues.transparency" />
          </h2>
          <br />
          <p className="is-size-5-desktop is-size-5-touch">
            <FormattedMessage id="components.ourValues.transparencyText" />
          </p>
          <br />
        </div>
        <div className="column is-4">
          <div>
            <img src={passionImage} alt="" style={{ maxHeight: "168px" }} />
          </div>
          <br />
          <h2 className="is-family-secondary is-size-3-desktop is-size-4-touch">
            <FormattedMessage id="components.ourValues.passion" />
          </h2>
          <br />
          <p className="is-size-5-desktop is-size-5-touch">
            <FormattedMessage id="components.ourValues.passionText" />
          </p>
          <br />
        </div>
        <div className="column is-4">
          <div>
            <img src={customersImage} alt="" style={{ maxHeight: "168px" }} />
          </div>
          <br />
          <h2 className="is-family-secondary is-size-3-desktop is-size-4-touch">
            <FormattedMessage id="components.ourValues.customers" />
          </h2>
          <br />
          <p className="is-size-5-desktop is-size-5-touch">
            <FormattedMessage id="components.ourValues.customersText" />
          </p>
          <br />
        </div>
      </div>
    </div>
  </div>
)

const JoinUs = () => (
  <div
    id="careers"
    className="section is-large has-background-grey-dark has-text-white"
  >
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-6 has-text-centered">
          <h2 className="is-family-secondary is-size-1-desktop is-size-3-touch has-text-white">
            <FormattedMessage id="components.joinUs.title" />
          </h2>
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

const TeamMember = injectIntl(({ id, name, job, photo, description, social = {}, intl }) => (
  <div>
    <p>
      <img src={photo} alt="" />
    </p>
    <br />
    <p className="is-size-4 has-text-weight-bold">{name}</p>
    <p className="is-size-5">{job}</p>
    <br />
    <p className="is-size-6">{intl.formatMessage({ id: `components.teamMembers.${id}` })}</p>
    <br />
    <p>
      {Object.keys(social).map(key => (
        <a
          key={key}
          href={social[key]}
          aria-label={`${name} ${key}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon is-medium has-text-grey-dark"
        >
          <i className={`socicon-${key}`}></i>
        </a>
      ))}
    </p>
  </div>
))

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
          <div className="column is-offset-1 is-11-desktop is-11-widescreen">
            <Customers
              customers={INVESTORS}
              title={props.intl.formatMessage({ id: "pages.about.customers" })}
            />
          </div>
        </div>
      </div>
    </div>
    <OurValues />
    <Team members={TEAM_MEMBERS} />
    <JoinUs />
    <Newsletter />
  </Layout>
)

export default injectIntl(AboutPage)
