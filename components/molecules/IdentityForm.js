// TODO faire fonctionner
import { useForm } from "react-hook-form"

import InputRadio from "./InputRadio"
import Input from "./Input"

import React, { useEffect } from "react"

export default function IdentityForm({}) {
	const {
		reset,
		control,
		formState: { errors },
	} = useForm()

	useEffect(() => {
		reset()
	}, [])

	return (
		<fieldset>
			<legend className="w-full my-8 text-xl font-bold text-center">
				Ton identité
			</legend>
			<div className="w-2/3 mx-auto">
				<div className="m-2">
					<Input
						id="email"
						type="email"
						name="email"
						placeholder="thomas.anderson@tera-campus.com"
						label="E-mail :"
						required="true"
					/>
					<span className="text-tc-red">{errors?.type?.message}</span>
				</div>
				<div>
					<div className="m-2">
						<InputRadio
							name="gender"
							control={control}
							choices={[
								{ label: "Mme", value: "F" },
								{ label: "M.", value: "M" },
							]}
						/>
						<span className="col-span-2 text-tc-red">
							{errors?.gender?.message}
						</span>
					</div>
					<div className="m-2">
						<Input
							id="lastName"
							type="text"
							name="lastName"
							placeholder="Anderson"
							label="Nom* :"
						/>
						<span className="text-tc-red">{errors?.lastName?.message}</span>
					</div>
					<div className="m-2">
						<Input
							id="firstName"
							type="text"
							name="firstName"
							placeholder="Thomas"
							label="Prénom* :"
						/>
						<span className="text-tc-red">{errors?.firstName?.message}</span>
					</div>
				</div>
			</div>
		</fieldset>
	)
}
