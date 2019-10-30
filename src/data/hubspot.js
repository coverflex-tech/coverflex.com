const portalId = "6540453"

const forms = {
  "get-started": "1ad764fd-529f-4e4c-b16d-9f3bea985d16",
  "sign-up": "0b7b8bce-ef27-4922-b9d9-508d1519891a",
}

export const getFormUrl = form =>
  `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${forms[form]}`
