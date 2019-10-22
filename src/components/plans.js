import React, { useState } from "react"
import { navigate } from "gatsby"

const Price = ({ amount }) => (
  <div className="columns is-mobile is-vcentered is-variable is-1" style={{marginBottom: "-.75rem"}}>
    <div className="column is-narrow">
      <p className="is-size-3 has-text-weight-bold has-text-primary">
        <span className="is-size-4">&euro;</span>
        <span>{amount}</span>
      </p>
    </div>
    <div className="column">
      <p className="is-size-7">/ Employee</p>
      <p className="is-size-7">/ Month</p>
    </div>
  </div>
)

const CTA = ({ label, to, onClick }) => (
  <button onClick={onClick ? onClick : () => navigate(to)} className="button is-primary is-outlined is-medium">
    {label}
  </button>
)

export default () => {
  const [openedPlans, setOpenedPlans] = useState({})

  return (
    <div className="plans container">
      <div className="columns is-multiline is-variable is-3-touch is-0-desktop">
        <div className="plans-item column is-3-desktop is-12-mobile is-6-tablet">
          <div className="section is-fullheight has-background-light">
            <p className="title is-size-4">Standard</p>
            <p className="subtitle is-size-6">Employee Full Protection</p>
            <hr/>
            <Price amount="7.99"/>
            <div className={!openedPlans.standard ? "is-hidden-mobile" : ""}>
              <hr/>
              <p className="has-text-weight-bold">Workers Compensation</p>
              <p>Mandatory</p>
              <br/>
              <p className="has-text-weight-bold">Business Content</p>
              <p>Up to 10,000&euro; / employee</p>
              <br/>
              <p className="has-text-weight-bold">Baggage</p>
              <br/>
              <p className="has-text-weight-bold">Mobile Equipment</p>
              <p>Up to 1,000&euro; / employee</p>
              <br/>
              <br/>
              <CTA to="/get-started/?plan=standard" label="Know more"/>
            </div>
            {!openedPlans.standard && <div className="is-hidden-desktop">
              <br/>
              <CTA label="Show more" onClick={() => setOpenedPlans({...openedPlans, standard: true})}/>
            </div>}
          </div>
        </div>
        <div className="plans-item is-selected column is-3-desktop is-12-mobile is-6-tablet has-text-white">
          <div className="section is-fullheight has-background-grey-dark">
            <p className="is-size-7"><br/></p>
            <p className="title is-size-4 has-text-white">Intermediate</p>
            <p className="subtitle is-size-6 has-text-white">Health and Travel included</p>
            <hr className="is-inverted"/>
            <Price amount="19.99"/>
            <div className={!openedPlans.intermediate ? "is-hidden-mobile" : ""}>
              <hr className="is-inverted"/>
              <p className="has-text-weight-bold has-text-primary">All Standard features</p>
              <hr className="is-inverted"/>
              <p className="has-text-weight-bold">Serious Diseases</p>
              <br/>
              <p className="has-text-weight-bold">Basic Health Insurance</p>
              <br/>
              <p className="has-text-weight-bold">Flight Delays</p>
              <br/>
              <br/>
              <CTA to="/get-started/?plan=intermediate" label="Know more"/>
            </div>
            {!openedPlans.intermediate && <div className="is-hidden-desktop">
              <br/>
              <CTA label="Show more" onClick={() => setOpenedPlans({...openedPlans, intermediate: true})}/>
            </div>}
          </div>
        </div>
        <div className="plans-item column is-3-desktop is-12-mobile is-6-tablet">
          <div className="section is-fullheight has-background-light">
            <p className="title is-size-4">Premium</p>
            <p className="subtitle is-size-6">Full Stacked Protection</p>
            <hr/>
            <Price amount="39.99"/>
            <div className={!openedPlans.premium ? "is-hidden-mobile" : ""}>
              <hr/>
              <p className="has-text-weight-bold has-text-primary">All Intermediate features</p>
              <hr/>
              <p className="has-text-weight-bold">Full Health Insurance</p>
              <br/>
              <p className="has-text-weight-bold">Personal Accidents</p>
              <p>Global 24/7 Coverage</p>
              <br/>
              <p className="has-text-weight-bold">Cyber Risks</p>
              <br/>
              <p className="has-text-weight-bold">Life Insurance</p>
              <br/>
              <br/>
              <CTA to="/get-started/?plan=premium" label="Know more"/>
            </div>
            {!openedPlans.premium && <div className="is-hidden-desktop">
              <br/>
              <CTA label="Show more" onClick={() => setOpenedPlans({...openedPlans, premium: true})}/>
            </div>}
          </div>
        </div>
        <div className="plans-item column is-3-desktop is-12-mobile is-6-tablet">
          <div className="section is-fullheight has-background-light">
            <p className="title is-size-4">Enterprise</p>
            <p className="subtitle is-size-6">Tailored Protection</p>
            <hr/>
            <p className="has-text-light-grey">Large Team?</p>
            <p className="has-text-light-grey">Complex Market?</p>
            <p className="has-text-weight-bold">We've got you covered.</p>
            <br/>
            <CTA to="/get-started/?plan=enterprise"  label="Reach out"/>
          </div>
        </div>
      </div>
      <p className="has-text-right is-size-7">
        <span>Only available in Portugal, for now. </span>
        <span className="has-text-primary">Stay tuned. </span>
      </p>
    </div>
  )
}
