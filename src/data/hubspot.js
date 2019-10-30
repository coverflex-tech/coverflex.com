const portalId = "6540453"

const forms = {
  "get-started": "1ad764fd-529f-4e4c-b16d-9f3bea985d16",
  "sign-up": "813b50ac-45aa-4e71-b366-b211ac13bac9",
  "newsletter": "215cd098-b865-4de7-84a9-b425e44c599b",
}

export const getFormUrl = form =>
  `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${forms[form]}`
