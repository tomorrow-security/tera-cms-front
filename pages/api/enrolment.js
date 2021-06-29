export default function handler(req, res) {
  // l'exemple de la doc
  // res.status(200).json({ text: 'Hello' })

  const connect = connect(process.env.API_URL)
  const api = process.env.API_URL
  const apiEnrolment1 = `{${api}/public/new}`

  const email = req.body.email
  const gender = req.body.gender
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const phone = req.body.phone
  const consent = req.body.consentContact

  const request = connect
    .post({apiEnrolment1})
    .request({
      email,
      gender,
      firstName,
      lastName,
      phone,
      consent
    })
  
  request
    .then(() => res.status(201).send({"redirectUrl": "https://tera-campus.com/enrolment/quiz/<UUID>"}))
    .catch(() => res.status(400).send())
  // 400  bad request
  // 408 Request Timeout
  // 500 Internal Server Error
}