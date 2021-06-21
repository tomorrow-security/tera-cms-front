export default function Input({
  id,
  type,
  name,
  placeholder,
  label,
  required,
  // ref,
}) {
  
    return (
        <div className="flex space-x-2">
          <div className="flex items-center flex-1 space-around">
            <label
              htmlFor={id}
              // className={`flex-1 p-2 ${getBorder(invalid, isSelected)} text-center cursor-pointer`}
              className="flex-1 p-2 text-center cursor-pointer"
            >
              {label}
            </label>
            <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            autoComplete={id}
            required={required}
              // ref={ref}
            className="w-3/4 p-2 border rounded outline-none border-1"
            // className={`
            //     w-full p-2 border
            //     ${errors.email ? 'border-tc-red' : 'border-tc-blue'}
            //     rounded-none outline-none
            // `}
          />
          </div>
        </div>
    )
}