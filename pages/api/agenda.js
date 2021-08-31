import axios from "axios"

export default async (req, res) => {
	const data = JSON.stringify({
		date4: timedate,
		text: speaker,
		statut_16: type,
		statut_1: platform,
		statut: statut,
		texte_1: url,
	})

	// const query = `boards(ids: ${process.env.MONDAY_PLANNING_LIVES_BOARD_ID}) {
	const query = `boards(ids: 1606107159) {
    items(limit: 3){
      name
      id
      column_values (ids: ["date4", "text,"statut_16","statut_1","statut_18", "statut", "texte_1"]) {
        id
        title
        text
      }
    }`

	response = await fetch("https://api.monday.com/v2", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Authorization: process.env.MONDAY_API_KEY,
		},
		body: JSON.stringify({
			query: query,
		}),
	})

	res.status(response.status)
}
