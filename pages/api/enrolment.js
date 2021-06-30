export default function handler(req, res) {
  // l'exemple de la doc
  // res.status(200).json({ text: 'Hello' })

  /**connexion à l'API */
  const api = process.env.NEXT_PUBLIC_API_URL
  /** enpoint de l'API */
  const apiEnrolment1 = `{${api}/public/new}`

  const request = connect
    .post({apiEnrolment1})
    .request({
      email: req.body.email,
      gender: req.body.gender,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.consentContact,
      consent: req.body.consentContact
    })
  
  request
    .then(() => res.status(201).json())
    .catch(() => res.status(400).send())
  // 400  bad request
  // 408 Request Timeout
  // 500 Internal Server Error
}

// {"redirectUrl": "https://tera-campus.com/enrolment/quiz/<UUID>"}