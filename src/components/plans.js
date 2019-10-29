import React, { useState } from "react"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const PLANS = ["essential", "intermediate", "premium"]

const Plan = injectIntl(({ id, highlighted, opened, onOpen, intl }) => (
  <div className={`section is-fullheight${highlighted ? " has-background-grey-dark has-text-white" : " has-background-light"}`}>
    <div className="has-text-centered">
      <p className={`title is-size-3-desktop is-size-4-touch${highlighted ? " has-text-white" : ""}`}>
        <FormattedMessage id={`components.plans.${id}.title`} />
      </p>
      <Price amount={intl.formatMessage({ id: `components.plans.${id}.price` })} />
      <br/>
      <div className="is-hidden-touch">
        <Link
          className={`button is-primary is-radiusless is-medium${highlighted ? "" : " is-outlined"}`}
          to={`/get-started/?plan=${id}`}
        >
          <FormattedMessage id="components.plans.more"/>
        </Link>
        <br/>
        <br/>
        <hr className={highlighted && "is-inverted"}/>
      </div>
      {!opened && (
        <div className="is-hidden-desktop has-text-centered">
          <button
            className={`button is-primary is-radiusless is-medium${highlighted ? "" : " is-outlined"}`}
            onClick={() => onOpen(id)}
          >
            <FormattedMessage id="components.plans.show"/>
          </button>
        </div>
      )}
    </div>
    <div className={!opened ? "is-hidden-mobile" : "animated fadeIn fast"}>
      <hr className={"is-hidden-desktop" + (highlighted ? " is-inverted" : "")}/>
      {intl.messages[`components.plans.${id}.base`] && (
        <p className="has-text-primary has-text-weight-bold">
          <br/>
          <FormattedMessage id={`components.plans.${id}.base`}/>
          <br/>
        </p>
      )}
      <br />
      <p dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: `components.plans.${id}.coverages` })}}></p>
      <br />
      <br />
      <p className="is-size-7 has-text-grey">
        <FormattedMessage id="components.plans.addons"/>
      </p>
      <br />
      <p dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: `components.plans.${id}.addons` })}}></p>
      <br />
    </div>
    {opened && (
      <div className="is-hidden-desktop has-text-centered">
        <Link
          className={`button is-primary is-radiusless is-medium${highlighted ? "" : " is-outlined"}`}
          to={`/get-started/?plan=${id}`}
        >
          <FormattedMessage id="components.plans.more"/>
        </Link>
      </div>
    )}
  </div>
))

const Price = ({ amount }) => (
  <div
    className="columns is-mobile is-vcentered is-variable is-1"
    style={{ marginBottom: "-.75rem" }}
  >
    <div className="column has-text-right">
      <p className="is-size-7">
        <FormattedMessage id="components.plans.from" />
      </p>
      <p className="is-size-7"><br/></p>
    </div>
    <div className="column">
      <p className="is-size-2 has-text-weight-bold has-text-primary">
        <span className="is-size-5">&euro;</span>
        <span>{amount}</span>
      </p>
    </div>
    <div className="column has-text-left">
      <p className="is-size-7">
        / <FormattedMessage id="components.plans.employee" />
      </p>
      <p className="is-size-7">
        / <FormattedMessage id="components.plans.month" />
      </p>
    </div>
  </div>
)

export default injectIntl(({ intl }) => {
  const [openedPlans, setOpenedPlans] = useState({})

  const onOpen = id => setOpenedPlans({ ...openedPlans, [id]: true })

  return (
    <div className="plans container">
      <div className="columns is-multiline">
        <div className="column is-4-desktop is-12-mobile is-4-tablet">
          <Plan id="essential" opened={openedPlans.essential} onOpen={onOpen}/>
        </div>
        <div className="is-selected column is-4-desktop is-12-mobile is-4-tablet">
          <Plan highlighted id="intermediate" opened={openedPlans.intermediate} onOpen={onOpen}/>
        </div>
        <div className="column is-4-desktop is-12-mobile is-4-tablet">
          <Plan id="premium" opened={openedPlans.premium} onOpen={onOpen}/>
        </div>
        <div className="column is-12">
          <p className="has-text-right is-size-7 is-hidden-touch">
            <FormattedMessage id="components.plans.disclaimer" />
          </p>
          <p className="has-text-centered is-size-7 is-hidden-desktop">
            <FormattedMessage id="components.plans.disclaimer" />
          </p>
        </div>
        <br/>
        <div className="column is-12">
          <div className="is-fullheight has-text-centered">
            <div className="is-hidden-touch"><br/><br/></div>
            <p className="is-size-2-desktop is-size-3-touch has-text-weight-bold">
              <FormattedMessage id="components.plans.enterprise.title" />
            </p>
            <br/>
            <p className="is-size-5-desktop is-size-6-touch">
              <FormattedMessage id="components.plans.enterprise.subtitle" />
            </p>
            <br/>
            <Link
              className="button is-primary is-radiusless is-medium"
              to="/get-started/?plan=enterprise"
            >
              <FormattedMessage id="components.plans.contact"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
})
