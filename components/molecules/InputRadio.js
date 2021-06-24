import React, { memo } from 'react'
import { useController } from 'react-hook-form'

const getBorder = (invalid, selected) => {
    if (invalid) return 'border border-tc-red'
    if (selected) return 'border border-blue-500 bg-blue-50'
    return 'border border-black'
}
// TODO nouvelle version react-hook-form :  useController nouvelle écriture
function InputRadio({choices, control, name }) {
    const {
        field: { onChange, value },
        fieldState: { invalid },
    } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: ''
  })

    return (
        <div className="flex space-x-2">
            {
                choices.map(choice => {
									const id = `${name}${choice.value}`
									const isSelected = choice.value == value
                    return(
                        <div className="flex flex-1" key={id}>
                            <label
                                htmlFor={id}
                                className={`flex-1 p-2 mx-2 rounded ${getBorder(invalid, isSelected)} text-center cursor-pointer`}
                            >
                                {choice.label}
                            </label>
                            <input
                                type="radio"
                                id={id}
                                name={name}
                                value={choice.value}
                                className="hidden"
                                onChange={onChange}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default memo(InputRadio)