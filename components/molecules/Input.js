import { useForm } from "react-hook-form"

export default function Input({ id, type, name, placeholder, label }) {
  const {
    register,
    formState: { errors },
  } = useForm()

  //TODO faire fonctionner le message d'erreur
  //* TEST
  // const errorName = name
  const error = errors.name ? "border-tc-red" : "border-black"
  console.log("name : ", name)
  //~ renvoie email (sur l'exemple de l'email)
  console.log("error :", error)
  //! renvoie TOUJOURS border-black
  //*------

  return (
    <div className="flex mx-auto space-x-2">
      <div className="flex items-center justify-between flex-1 w-full lg:w-2/3">
        <div className="min-content">
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={`
                    w-full p-2 border
                    ${error}
                    rounded-none outline-none
                  `}
            {...register}
          />
        </div>
      </div>
    </div>
  )
}
