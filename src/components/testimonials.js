import React, { useState, useEffect } from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import TESTIMONIALS from "../data/testimonials"
import blockquoteImage from "../images/blockquote.svg"

const SPEED = 3200
const FADEOUT_SPEED = 2400

const QuoteMark = ({ invert }) => {

  return (
    <div>
      <div className="is-hidden-touch">
        <img src={blockquoteImage} alt="" style={invert && { transform: "rotate(180deg)" }}/>
      </div>
      <div className="is-hidden-desktop">
        <img src={blockquoteImage} alt="" width="20" style={invert && { transform: "rotate(180deg)" }}/>
      </div>
    </div>
  )
}

const Quote = ({ testimonial }) => {
  const [classnames, setClassnames] = useState("animated fadeIn")

  useEffect(() => {
    const fadeOut = setTimeout(() => setClassnames("animated fadeOut"), FADEOUT_SPEED)
    setClassnames("animated fadeIn")
    return () => clearTimeout(fadeOut)
  }, [testimonial])

  return (
    <div className={classnames}>
      <QuoteMark />
      <br />
      <p className="is-size-3-desktop is-size-5-touch">
        {testimonial.quote}
      </p>
      <div className="is-hidden-desktop has-text-right">
        <QuoteMark invert />
      </div>
      <br/>
      <div className="columns is-mobile">
        <div className="column is-4-desktop is-3-touch">
          <img src={testimonial.picture} alt=""/>
        </div>
        <div className="column is-8-desktop is-9-touch has-text-right">
          <div className="is-hidden-touch">
            <QuoteMark invert />
            <br/>
          </div>
          <p className="is-size-4-desktop is-size-5-touch">
            {testimonial.name}
          </p>
          <p className="is-size-5-desktop is-size-6-touch has-text-grey">{testimonial.job}</p>
        </div>
      </div>
    </div>
  )
}

const LogoList = ({ testimonials, selected, setSelected }) => (
  <div className="columns is-multiline is-mobile is-vcentered has-text-centered">
    {testimonials.map((testimonial, key) => (
      <div
        key={key}
        onClick={() => setSelected(key)}
        className="column is-narrow-desktop is-half-mobile is-clickable"
        style={{ opacity: selected === key ? "1" : "0.4" }}
      >
        <img src={testimonial.logo} style={{ padding: "10px" }} alt="" />
      </div>
    ))}
  </div>
)

export default injectIntl(({ testimonials = TESTIMONIALS }) => {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const nextSlide = () => setSelected((selected + 1) % testimonials.length)
    const pb = setInterval(nextSlide, SPEED)
    return () => clearInterval(pb)
  }, [selected, testimonials])

  return !testimonials.length ? null : (
    <div id="testimonials" className="container testimonials">
      <div className="section">
        <p className="title is-size-1-desktop is-size-3-touch has-text-centered">
          <FormattedMessage id="components.testimonials.title" />
        </p>
        <br />
        <br />
        <div>
          <div className="columns">
            <div className="column is-half-desktop is-hidden-touch">
              <LogoList testimonials={testimonials} selected={selected} setSelected={setSelected} />
            </div>
            <div className="column is-half-desktop quote">
              {testimonials[selected] && <Quote testimonial={testimonials[selected]}/>}
            </div>
            <div className="column is-hidden-desktop">
              <br />
              <LogoList testimonials={testimonials} selected={selected} setSelected={setSelected} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
