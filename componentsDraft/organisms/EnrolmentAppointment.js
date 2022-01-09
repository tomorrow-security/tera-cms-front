import React, { useEffect, useState } from "react"

export default function EnrolmentAppointment() {
	useEffect(() => {
		const script = document.createElement("script")
		script.src = "https://assets.calendly.com/assets/external/widget.js"
		script.async = true
		document.body.appendChild(script)
	}, [])

	return (
		<>
			<div className="mx-4 mb-4 text-xl text-center md:text-2xl">
				Pour terminer ton inscription, planifies ton entretien de 15mn avec Tera
				Campus.
			</div>
			<div className="xl:my-12">
				<div
					className="max-w-full min-h-full calendly-inline-widget"
					data-url="https://calendly.com/brice-tera-campus/meet?text_color=000000&hide_event_type_details=1&month=2022-01"
					style={{ minWidth: "320px", height: "650px" }}
				/>
			</div>
		</>
	)
}
