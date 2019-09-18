import React from "react"

export default () => (
  <div className="container">
    <div className="columns is-gapless">
      <div className="column is-3 has-background-light">
        <div className="section">
          <p className="title">Standard</p>
          <p className="subtitle is-size-6">Employee Full Protection</p>
          <hr/>
          <div className="level">
            <div className="level-item">
              <p className="is-size-2 has-text-weight-bold has-text-primary">
                <span>9.99</span>
                <span className="is-size-4">&euro;</span>
              </p>
            </div>
            <div className="level-item">
              <div>
                <p className="is-size-7">/ Employee</p>
                <p className="is-size-7">/ Month</p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
      <div className="column is-3 has-background-grey-dark has-text-white" style={{margin: '-1.25em 0 -1.25em -1.25em'}}>
        <div className="section">
          <p className="is-size-7 has-text-weight-bold">Popular</p>
          <p className="title has-text-white">Intermediate</p>
          <p className="subtitle is-size-6 has-text-white">Health and Travel included</p>
          <hr/>
          <div className="level">
            <div className="level-item">
              <p className="is-size-2 has-text-weight-bold has-text-primary">
                <span>19.99</span>
                <span className="is-size-4">&euro;</span>
              </p>
            </div>
            <div className="level-item">
              <div>
                <p className="is-size-7">/ Employee</p>
                <p className="is-size-7">/ Month</p>
              </div>
            </div>
          </div>
          <hr/>
          <p className="has-text-weight-bold has-text-primary">All Standard features</p>
          <hr/>
          <p className="has-text-weight-bold">Serious Diseases</p>
          <br/>
          <p className="has-text-weight-bold">Basic Health Insurance</p>
          <br/>
          <p className="has-text-weight-bold">Flight Delays</p>
        </div>
      </div>
      <div className="column is-3 has-background-light">
        <div className="section">
          <p className="title">Premium</p>
          <p className="subtitle is-size-6">Full Stacked Protection</p>
          <hr/>
          <div className="level">
            <div className="level-item">
              <p className="is-size-2 has-text-weight-bold has-text-primary">
                <span>49.99</span>
                <span className="is-size-4">&euro;</span>
              </p>
            </div>
            <div className="level-item">
              <div>
                <p className="is-size-7">/ Employee</p>
                <p className="is-size-7">/ Month</p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
      <div className="column is-3 has-background-light">
        <div className="section">
          <p className="title">Enterprise</p>
          <p className="subtitle is-size-6">Tailored Protection</p>
          <hr/>
          <p className="has-text-light-grey">Large Team?</p>
          <p className="has-text-light-grey">Complex Market?</p>
          <p className="has-text-weight-bold">We've got you covered.</p>
          <br/>
          <button className="button is-primary is-rounded is-medium">
            <span className="is-size-6 has-text-weight-bold">Reach out</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)
