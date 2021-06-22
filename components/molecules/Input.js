export default function Input({
  id,
  type,
  name,
  placeholder,
  label,
  register
}) {

  const error = errors.name
  
    return (
        <div className="flex mx-auto space-x-2">
          <div className="flex items-center justify-between flex-1 w-full lg:w-2/3">
            <div className="min-content">
              <label
                htmlFor={id}
                // className={`flex-1 p-2 ${getBorder(invalid, isSelected)} text-center cursor-pointer`}
                className="flex-1 p-2 text-center cursor-pointer"
              >
              {label}
            </label>
            </div>
            <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            className="w-2/3 p-2 border rounded outline-none lg:max-w-md border-1"
            className={`
            w-full p-2 border
            ${error ? 'border-tc-red' : 'border-black'}
            rounded-none outline-none`}
            register={register}
            />
          </div>
        </div>
    )
}

