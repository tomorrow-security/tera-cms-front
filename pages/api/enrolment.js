export default function handler(req, res) {
  // l'exemple de la doc
  // res.status(200).json({ text: 'Hello' })

  const enrolment1= connect (process.env.API_URL)

  const email = req.body.email
  const gender = req.body.gender,
  const firstName = req.body.firstName,
  const lastName = req.body.lastName,
  const phone = req.body.phone,
  const consent = req.body.consentContact

  const api = process.env.API_URL

  //ne fonctionne pas 
  // const api = process.env.API_URL/public/new

  const request = enrolment1
    .post()
    .request({
      email,
      gender,
      firstName,
      lastName,
      phone,
      consent
    })
  
  request
    .then(() => res.status(200).send({"redirectUrl": "https://tera-campus.com/enrolment/quiz/<UUID>"}))
    .catch(() => res.status(500).send())
}