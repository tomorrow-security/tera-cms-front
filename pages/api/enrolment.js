export default (req, res) => {
  const api = process.env.API_URL

  const request = api
    .post('send')
    .request({
      email: req.body.email,
      gender: req.body.gender,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone
    })
  
  request
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send())
  })
}