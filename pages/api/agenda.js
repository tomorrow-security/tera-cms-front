export default async (req, res) => {
  // TODO améliorer la requête pour ne prendre que les événements futurs et confirmés.
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
  // const test = (res) => res.json()
  // const test2 = (res) => console.log(JSON.stringify(res, null, 2))

  const { data } = await response.json()

  // console.log("response :", body)
  // console.log("res :", res)
  // console.log("test :", test)
  // console.log("test2 :", test2)

  return res.status(200).json(data.boards[0].items)
}
