import React from "react"
import Layout from "../components/layout"
import Newsletter from "../components/newsletter"
import Customers from "../components/customers"
import TEAM_MEMBERS from "../data/team_members"
import heroImage from "../images/about-hero.jpg"
import slashImage from "../images/slash.svg"
import { injectIntl, FormattedMessage } from "react-intl"

const Header = () => (
  <div>
    <div className="section is-medium has-background-light">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <h1 className="is-size-1-desktop is-size-3-touch">
              <span><FormattedMessage id="pages.about.title1"/> </span>
              <span className="has-text-weight-bold">
                <FormattedMessage id="pages.about.title2"/>
              </span>
            </h1>
          </div>
          <div className="column is-5 is-offset-1 is-hidden-touch">
            <img src={heroImage} style={{position: "absolute", top: "-3rem", width: "640px"}} alt=""/>
          </div>
        </div>
      </div>
    </div>
    <div className="is-hidden-desktop">
      <img src={heroImage} alt=""/>
    </div>
  </div>
)

const Intro = () => (
  <div className="section is-medium">
    <div className="container">
      <div className="columns">
        <div className="column is-6">
          <p className="title is-size-2-desktop is-size-3-touch">
            <FormattedMessage id="pages.about.introTitle"/>
          </p>
          <br/>
          <p className="is-size-5">
            <FormattedMessage id="pages.about.introText"/>
          </p>
        </div>
      </div>
    </div>
  </div>
)

const Jobs = () => (
  <div id="careers" className="section is-medium">
    <p className="title is-size-3-desktop is-size-4-touch has-text-centered">
      <FormattedMessage id="components.joinUs.openPositions"/>
    </p>
    <br/>
    <div className="container">
      <div className="columns">
        <div className="column">
          <Job
            position="Frontend Developer"
            location="Braga, Portugal"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna."
          />
        </div>
        <div className="column">
          <Job
            position="Sales Representative"
            location="Braga, Portugal"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna."
          />
        </div>
        <div className="column">
          <Job
            position="HR Manager"
            location="Braga, Portugal"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </div>
  </div>
)

const Job = ({ position, location, description }) => (
  <div className="notification" style={{height: "100%"}}>
    <p className="is-size-5 has-text-weight-bold">{position}</p>
    <p className="is-size-5">{location}</p>
    <br/>
    <p className="is-size-5">{description}</p>
    <br/>
    <a href="/" className="button is-primary is-outlined">
      <FormattedMessage id="components.joinUs.applyJob"/>
    </a>
  </div>
)

const Benefits = () => (
  <div>
    <div className="container">
      <div className="section is-medium has-background-primary has-text-white" style={{boxShadow: "500px 0 0 #F0814D"}}>
        <div className="columns">
          <div className="column is-offset-1">
            <p className="title is-size-2-desktop is-size-3-touch has-text-white">
              <FormattedMessage id="components.joinUs.benefits.title"/>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-offset-1">
            <div className="columns is-size-5-desktop is-size-6-touch is-gapless">
              <div className="column is-offset-1 is-6">
                <div className="content">
                  <ul className="is-list">
                    <li><FormattedMessage id="components.joinUs.benefits.1"/></li>
                    <li><FormattedMessage id="components.joinUs.benefits.2"/></li>
                    <li><FormattedMessage id="components.joinUs.benefits.3"/></li>
                    <li><FormattedMessage id="components.joinUs.benefits.4"/></li>
                  </ul>
                </div>
              </div>
              <div className="column is-offset-1 is-6">
                <div className="content">
                  <ul className="is-list">
                    <li><FormattedMessage id="components.joinUs.benefits.5"/></li>
                    <li><FormattedMessage id="components.joinUs.benefits.6"/></li>
                    <li><FormattedMessage id="components.joinUs.benefits.7"/></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const OurValues = () => (
  <div>
    <div className="container has-background-light">
      <div className="section is-medium">
        <div className="columns">
          <div className="column is-offset-1">
            <p className="title is-size-2-desktop is-size-3-touch">
              <FormattedMessage id="components.ourValues.title"/>
            </p>
            <br/>
          </div>
        </div>
        <div className="columns">
          <div className="column is-offset-1 is-5 is-relative is-hidden-touch">
            <img src={slashImage} style={{position: "absolute", bottom: 0}} alt=""/>
          </div>
          <div className="column is-5">
            <p className="title is-size-3-desktop is-size-4-touch">
              <FormattedMessage id="components.ourValues.transparency"/>
            </p>
            <p className="is-size-5-desktop is-size-6-touch">
              <FormattedMessage id="components.ourValues.transparencyText"/>
            </p>
            <br/>
            <p className="title is-size-3-desktop is-size-4-touch">
              <FormattedMessage id="components.ourValues.passion"/>
            </p>
            <p className="is-size-5-desktop is-size-6-touch">
              <FormattedMessage id="components.ourValues.passionText"/>
            </p>
            <br/>
            <p className="title is-size-3-desktop is-size-4-touch">
              <FormattedMessage id="components.ourValues.customers"/>
            </p>
            <p className="is-size-5-desktop is-size-6-touch">
              <FormattedMessage id="components.ourValues.customersText"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const JoinUs = () => (
  <div className="section is-medium">
    <div className="container">
      <div className="columns">
        <div className="column is-6">
          <p className="title is-size-2-desktop is-size-3-touch">
            <FormattedMessage id="components.joinUs.title"/>
          </p>
          <br/>
          <p className="is-size-5">
            <FormattedMessage id="components.joinUs.text"/>
          </p>
        </div>
      </div>
    </div>
  </div>
)

const TeamMember = ({name, job, photo, description}) => (
  <div>
    <p>
      <img className="image" src={photo} alt=""/>
    </p>
    <br/>
    <p className="is-size-4 has-text-weight-bold">{name}</p>
    <p className="is-size-5">{job}</p>
    <br/>
    <p className="is-size-6">{description}</p>
    <br/>
    <br/>
  </div>
)

const Team = ({ members }) => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-6">
          <p className="title is-size-2-desktop is-size-3-touch">
            <FormattedMessage id="components.team.title"/>
          </p>
          <br/>
          <p className="is-size-5">
            <FormattedMessage id="components.team.text"/>
          </p>
          <br/>
          <br/>
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        {members.map((member, key) => (
          <div key={key} className="column is-3">
            <TeamMember key={key} {...member}/>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const AboutPage = props => (
  <Layout title="About" navbarClassname="is-light">
    <Header {...props} />
    <Intro {...props} />
    <OurValues {...props} />
    <Customers title={props.intl.formatMessage({ id: "pages.about.customers" })} />
    <Team members={TEAM_MEMBERS} {...props} />
    <JoinUs {...props} />
    <Benefits {...props} />
    <Jobs {...props} />
    <Newsletter {...props} />
  </Layout>
)

export default injectIntl(AboutPage)
