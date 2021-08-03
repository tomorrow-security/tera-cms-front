import { useState, useEffect } from 'react'

export default function InputButtonSimple({ defaultValue, submitedValue}) {
  // TODO fix : le InputButtonSimple reste cliqué au changement de question (donc en rouge)
    //TODO réinitialiser le bouton
  
  const [buttonValue, setButtonValue] = useState(defaultValue)

  const handleClick=()=>{
    setButtonValue(submitedValue);
  }

  //! ne fonctionne pas
  // const onSubmit = () => {
  //   useEffect(setButtonValue(defaultValue))
  // }

  //! ne fonctionne pas
  // const onSubmit = () => {
  //   setButtonValue(defaultValue)
  // }

  return (
  <div className="pt-8 mx-auto w-max group">
    <div className="relative z-0 h-10 px-4 mx-auto font-bold text-transparent transition-colors border rounded-t shadow outline-none cursor-pointer duration-400 w-max rounded-b-xl bg-tc-blue-light border-tc-blue-dark group-hover:bg-tc-red-light group-hover:border-tc-red-dark group-hover:shadow-none">
      {buttonValue}
        <input
          type="submit"
          value={buttonValue}
          className="absolute left-0 z-20 h-10 px-4 mx-auto font-bold text-white transition-colors transform rounded-t shadow outline-none cursor-pointer duration-400 -top-15/100 w-max rounded-b-xl bg-tc-blue group-hover:bg-tc-red group-hover:shadow-none group-hover:-top-20/100 active:translate-y-20/100"
          onClick={handleClick}
          onSubmit={onSubmit}
      />
    </div>
    </div>
  )
}