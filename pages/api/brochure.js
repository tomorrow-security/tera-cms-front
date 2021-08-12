import axios from 'axios'

const capitalize = str => {
  str = str.toLowerCase()
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

export default async (req, res) => {
  const firstName = capitalize(req.body.firstName)
  const lastName = req.body.lastName.toUpperCase()
  const email = req.body.email
  const phone = req.body.phone
  const consent = req.body.consent

  let data = "{"
  data = data + `"text": "${lastName}",`
  data = data + `"text2": "${firstName}",`
  data = data + `"email": {"email": "${email}", "text": "${email}"},`
  data = data + `"phone": {"phone": "${phone}"},`
  data = data + `"status": {"label": "Brochure"},`
  data = data + `"check": {"checked": "${consent}"}`
  data = data + "}"

  const query = `mutation { create_item (board_id: ${process.env.MONDAY_CRM_STUDENTS_BOARD_ID}, group_id: "topics", item_name: "${firstName} ${lastName}", column_values: ${JSON.stringify(data)}) { id } }`

  const response = await axios.post('https://api.monday.com/v2', JSON.stringify({'query' : query}), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : process.env.MONDAY_API_KEY
    },
  })

  res.status(response.status)
}
