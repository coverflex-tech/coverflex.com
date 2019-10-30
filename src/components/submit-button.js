import React from "react"
import { connect } from 'formik';

const baseClasses = "button has-text-weight-bold is-fullwidth is-primary is-radiusless"

export default connect(({ label, large, disabled, inverted, formik }) => (
  <button
    type="submit"
    className={
      baseClasses +
      (large ? " is-large" : " is-medium") +
      (inverted ? " is-inverted" : "") +
      (formik.isSubmitting ? " is-loading" : "")
    }
    disabled={disabled || formik.isSubmitting || !formik.isValid}
  >
    {label}
  </button>
))
