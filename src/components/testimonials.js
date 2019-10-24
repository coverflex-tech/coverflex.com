import React, { useState, useEffect } from "react"
import { injectIntl, FormattedMessage } from "react-intl"
import TESTIMONIALS from "../data/testimonials"
import blockquoteImage from "../images/blockquote.svg"

const SPEED = 3200
const FADEOUT_SPEED = 2400

const QuoteMark = ({ invert }) => (
  <p>
    <img
      src={blockquoteImage}
      alt=""
      style={invert && { transform: "rotate(180deg)" }}
    />
  </p>
)

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
      <br />
      <div className="columns">
        <div className="column is-narrow">
          <img src={testimonial.picture} alt="" />
        </div>
        <div className="column has-text-right">
          <QuoteMark invert />
          <br />
          <p className="is-size-5 has-text-weight-bold">
            {testimonial.name}
          </p>
          <p className="is-size-5 has-text-grey">{testimonial.job}</p>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(({ testimonials = TESTIMONIALS }) => {
  const [selected, setSelected] = useState(0)

  const nextSlide = () => setSelected((selected + 1) % testimonials.length)

  useEffect(() => {
    const pb = setInterval(nextSlide, SPEED)
    return () => clearInterval(pb)
  }, [selected])

  const LogoList = ({ selected }) => (
    <div className="columns is-multiline is-mobile is-vcentered">
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

  return !testimonials.length ? null : (
    <div id="testimonials" className="container">
      <div className="section">
        <p className="title is-size-2-desktop is-size-3-touch">
          <FormattedMessage id="components.testimonials.title" />
        </p>
        <br />
        <br />
        <div>
          <div className="columns">
            <div className="column is-half-desktop is-hidden-touch">
              {<LogoList selected={selected} />}
            </div>
            <div className="column is-half-desktop">
              {testimonials[selected] && <Quote testimonial={testimonials[selected]}/>}
            </div>
            <div className="column is-hidden-desktop">
              <br />
              {<LogoList selected={selected} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
