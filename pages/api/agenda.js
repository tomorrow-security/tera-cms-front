import axios from 'axios'

export default async (req, res) => {
  const query = {boards (ids: ${process.env.MONDAY_PLANNING_LIVES_BOARD_ID}){
    items(limit: 3){
      name
      id
      column_values (ids: ["date4","text","statut_16","statut_1","statut_18", "statut"]) {
        id
        text
      }
    }
  }
  }

  const response = await axios.get('https://api.monday.com/v2', JSON.stringify({'query' : query}), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : process.env.MONDAY_API_KEY
    },
  })

  res.status(response.status)
}

