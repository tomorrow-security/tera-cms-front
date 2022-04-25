export default (req, res) => {
	const mailjet = require("node-mailjet").connect(
		process.env.MJ_APIKEY_PUBLIC,
		process.env.MJ_APIKEY_PRIVATE
	)

	const request = mailjet.post("send", { version: "v3.1" }).request({
		Messages: [
			{
				From: {
					Email: "contact@tera-campus.com",
					Name: "Formulaire de contact",
				},
				ReplyTo: { Email: req.body.email },
				To: [
					{
						Email: "contact@tera-campus.com",
						Name: "Tera Campus",
					},
				],
				Subject: `Demande d'informations à propos de Tera Campus - ${req.body.email}`,
				TextPart: req.body.message,
			},
		],
		SandboxMode: process.env.NODE_ENV === "development",
	})

	request.then(() => res.status(200).send()).catch(() => res.status(500).send())
}
