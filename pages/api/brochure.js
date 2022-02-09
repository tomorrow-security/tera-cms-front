import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const phone = req.body.phone;
    const consent = req.body.consent;

    let data = "{";
    data = data + `"email": {"email": "${email}", "text": "${email}"},`;
    data = data + `"phone": {"phone": "${phone}"},`;
    data = data + `"status": {"label": "Brochure"},`;
    data = data + `"check": {"checked": "${consent}"},`;
    data = data + `"dropdown": "Brochure"`;
    data = data + "}";

    const query = `mutation { create_item (board_id: 1841855665, group_id: "topics", item_name: "${email}", column_values: ${JSON.stringify(data)}) { id } }`;

    const response = await axios.post(
      "https://api.monday.com/v2",
      JSON.stringify({ query: query }),
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": process.env.MONDAY_API_KEY,
        },
      }
    );

    res.status(response.status);
  }
};
