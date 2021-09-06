const capitalize = str => {
  str = str.toLowerCase()
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

export default async (req, res) => {
  const firstName = capitalize(req.body.firstName)
  const lastName = req.body.lastName.toUpperCase()
  const email = req.body.email
  // const phone = req.body.phone
  const consent = req.body.consent

  const data = JSON.stringify({
    'text': lastName,
    'text2': firstName,
    'email': {'email': email, 'text': email},
    // 'phone': {'phone': phone , 'countryShortName': enrolment.phone_country_short_name},
    'status': {'label': 'Brochure'},
    'dropdown': 'Website',
    'check': {'checked': consent},
  })

  const query = `mutation { create_item (board_id: ${process.env.MONDAY_CRM_STUDENTS_BOARD_ID}, group_id: topics, item_name: "${firstName} ${lastName}", column_values: ${data}) { id }}`

  response = await fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : process.env.MONDAY_API_KEY
    },
    body: JSON.stringify({
      'query' : query
    })
  })

  res.status(200).json({ name: 'John Doe' })
}
