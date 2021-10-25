export default async (req, res) => {
  // TODO améliorer la requête pour ne récupérer que les événements futurs et confirmés.
  const query = `query {
    boards (ids: ${process.env.MONDAY_PLANNING_LIVES_BOARD_ID}) {
    items {
			id
      name
			column_values {
				id
				text
			}
    }
    }
	}`

  const response = await fetch("https://api.monday.com/v2", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.MONDAY_API_KEY,
    },
    body: JSON.stringify({
      query: query,
    }),
  })

  const { data } = await response.json()

  return res.status(200).json(data.boards[0].items)
}
