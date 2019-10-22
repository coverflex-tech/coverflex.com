import React from "react"
import Layout from "../components/layout"
import Newsletter from "../components/newsletter"
import TEAM_MEMBERS from "../data/team_members"
import heroImage from "../images/about-hero.jpg"
import slashImage from "../images/slash.svg"

const Header = () => (
  <div>
    <div className="section is-medium has-background-light">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <h1 className="is-size-1-desktop is-size-3-touch">
              We’re here to make life easier
              <span className="has-text-weight-bold"> and insurance simpler</span>
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
          <p className="title is-size-2-desktop is-size-3-touch">Insurance hasn’t changed in more than a century</p>
          <br/>
          <p className="is-size-5">
            But the ways that we live, work and travel have. Traditional, annual insurance
            policies can’t keep up with our ambitions. From flexible working to vehicle-sharing,
            one policy no longer fits all. So we’ve been building the solution: simple,
            flexible policies, designed to meet 21st-century needs.
          </p>
        </div>
      </div>
    </div>
  </div>
)

const Jobs = () => (
  <div id="careers" className="section is-medium">
    <p className="title is-size-3-desktop is-size-4-touch has-text-centered">Open positions</p>
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
    <a href="/" className="button is-primary is-outlined">Apply Now</a>
  </div>
)

const Benefits = () => (
  <div>
    <div className="container">
      <div className="section is-medium has-background-primary has-text-white" style={{boxShadow: "500px 0 0 #F0814D"}}>
        <div className="columns">
          <div className="column is-offset-1">
            <p className="title is-size-2-desktop is-size-3-touch has-text-white">Benefits included</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-offset-1">
            <div className="columns is-size-5-desktop is-size-6-touch is-gapless">
              <div className="column is-offset-1 is-6">
                <div className="content">
                  <ul className="is-list">
                    <li>A fun and supportive office environment working alongside some true experts</li>
                    <li>Competitive salary and equity package</li>
                    <li>Remote-friendly company</li>
                    <li>Top of the range equipment</li>
                  </ul>
                </div>
              </div>
              <div className="column is-offset-1 is-6">
                <div className="content">
                  <ul className="is-list">
                    <li>Conferences, off-sites and parties (of course!)</li>
                    <li>Parent-friendly culture</li>
                    <li>Healthy work-life balance</li>
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
            <p className="title is-size-2-desktop is-size-3-touch">This is what we believe in</p>
            <br/>
          </div>
        </div>
        <div className="columns">
          <div className="column is-offset-1 is-5 is-relative is-hidden-touch">
            <img src={slashImage} style={{position: "absolute", bottom: 0}} alt=""/>
          </div>
          <div className="column is-5">
            <p className="title is-size-3-desktop is-size-4-touch">Transparency</p>
            <p className="is-size-5-desktop is-size-6-touch">Trust comes from transparency and nothing good is ever hidden in fine print.</p>
            <br/>
            <p className="title is-size-3-desktop is-size-4-touch">Passion</p>
            <p className="is-size-5-desktop is-size-6-touch">Only passion drives change and the insurance world really needs both.</p>
            <br/>
            <p className="title is-size-3-desktop is-size-4-touch">Customers</p>
            <p className="is-size-5-desktop is-size-6-touch">Customers inspire great work that’s why we always listen to them.</p>
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
          <p className="title is-size-2-desktop is-size-3-touch">Join Us</p>
          <br/>
          <p className="is-size-5">
            We're always looking for talented humans who are interested in building the future
            alongside us. As a young company, we're still shaping our culture and our team.
            We would love for you to be a part of the journey we're taking towards achieving this.
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
          <p className="title is-size-2-desktop is-size-3-touch">A team with experience in industry disruption</p>
          <br/>
          <p className="is-size-5">
            Our company is young, but our team is experienced in insurance, technology and
            building successfull businesses.
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

const AboutPage = () => (
  <Layout navbarClassname="is-light">
    <Header />
    <Intro />
    <OurValues />
    <div className="section"></div>
    <Team members={TEAM_MEMBERS} />
    <JoinUs />
    <Benefits />
    <Jobs />
    <Newsletter />
  </Layout>
)

export default AboutPage
