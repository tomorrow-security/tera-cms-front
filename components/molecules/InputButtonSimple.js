import { useState } from 'react'

export default function InputButtonSimple({ defaultValue, submitedValue, click }) {
  // TODO améliorer le style un fois cliqué
  
  const [buttonValue, setButtonValuealue] = useState(defaultValue)

  const handleClick=()=>{
    setButtonValuealue(submitedValue);
    { click }
    console.log (click)
  }

  return (
  <div className="pt-8 mx-auto w-max group">
    <div className="relative z-0 h-10 px-4 mx-auto font-bold text-transparent transition-colors border rounded-t shadow outline-none cursor-pointer duration-400 w-max rounded-b-xl bg-tc-blue-light border-tc-blue-dark group-hover:bg-tc-red-light group-hover:border-tc-red-dark group-hover:shadow-none">
      {buttonValue}
        <input
          type="submit"
          value={buttonValue}
          className="absolute left-0 z-20 h-10 px-4 mx-auto font-bold text-white transition-colors transform rounded-t shadow outline-none cursor-pointer duration-400 -top-15/100 w-max rounded-b-xl bg-tc-blue group-hover:bg-tc-red group-hover:shadow-none group-hover:-top-20/100 active:translate-y-20/100"
          // TODO faire passer la props onClick à onClick (pour TestCreated par exemple)
          // onClick={() => setButtonValuealue(submitedValue)}
          // onClick={()=>setButtonValuealue(submitedValue)}
          onClick = {handleClick}
      />
    </div>
    </div>
  )
}