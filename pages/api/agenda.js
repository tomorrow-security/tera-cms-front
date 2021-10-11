export default async (req, res) => {
  // let query =
  //   "query { boards (ids: 12345678) { name state board_folder_id owner { id }}}"
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

  response = fetch("https://api.monday.com/v2", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.MONDAY_API_KEY,
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(JSON.stringify(res, null, 2)))

  console.log(response)

  // fetch("https://api.monday.com/v2", {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "YOUR_API_KEY_HERE",
  //   },
  //   body: JSON.stringify({
  //     query: query,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((res) => console.log(JSON.stringify(res, null, 2)))
}
