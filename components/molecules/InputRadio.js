// import React, { memo } from 'react'
// import { useController } from 'react-hook-form'

// const getBorder = (invalid, selected) => {
//     if (invalid) return 'border border-tc-red'
//     if (selected) return 'border border-blue-500 bg-blue-50'
//     return 'border border-black'
// }

export default function InputRadio({
  choices,
  // control,
  name }) {
  // const { field, meta } = useController({
  //   name,
  //   // control,
  //   defaultValue: ''
  // })
    // const { onChange, ref, value } = field
    // const { invalid } = meta

    return (
        <div className="flex space-x-2">
            {
                choices.map(choice => {
                    const id = `${name}${choice.value}`
                    // const isSelected = choice.value == value

                    return(
                        <div className="flex flex-1" key={id}>
                            <label
                                htmlFor={id}
                                // className={`flex-1 p-2 ${getBorder(invalid, isSelected)} text-center cursor-pointer`}
                                className="flex-1 p-2 text-center cursor-pointer"
                            >
                                {choice.label}
                            </label>
                            <input
                                type="radio"
                                id={id}
                                name={name}
                                value={choice.value}
                                className="hidden"
                                // onChange={onChange}
                                // ref={ref}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

// export default memo(InputRadio)