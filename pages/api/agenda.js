export default async (req, res) => {
  const query = `query {
    boards (ids: ${process.env.MONDAY_PLANNING_LIVES_BOARD_ID}) {
    items (limit: 3) {
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

  res.status(200).json()

  console.log("response :", response)
}
