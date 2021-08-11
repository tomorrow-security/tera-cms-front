import { useEffect } from "react"
import { useForm } from "react-hook-form"

export default function InputButton({
  mutation,
  defaultValue,
  loadingValue,
  successValue,
  onClick
}) {

  const submitButtonParams = {
    loading: {
      value: loadingValue,
      color: 'bg-tc-red-medium cursor-wait',
      position:'absolute left-0 top-0 z-20',
      shadow: 'bg-tc-red-xlight border border-tc-red-dark cursor-wait border-t-0',
      disabled: true
    },
    success: {
      value: successValue,
      color: 'bg-tc-blue-medium cursor-not-allowed',
      position:'absolute left-0 -top-10/100 z-20',
      shadow: 'bg-tc-blue-xlight border border-tc-blue cursor-not-allowed border-t-0',
      disabled: true
    },
    default: {
      value: defaultValue,
      color: 'bg-tc-blue group-hover:bg-tc-red shadow cursor-pointer group-hover:shadow-none transition-colors duration-500 group-hover:-top-20/100 transform active:translate-y-20/100',
      position:'absolute left-0 -top-15/100 z-20',
      shadow: 'bg-tc-blue-light border border-tc-blue-dark group-hover:bg-tc-red-light group-hover:border-tc-red-dark shadow group-hover:shadow-none cursor-pointer  transition-colors duration-500',
      disabled: false
    }
  }
  
  const {reset} = useForm()
  // useEffect(() => { reset({},{keepIsSubmitted:false}) }, []) //!
  // useEffect(() => mutation.reset()) //! boucle infini
  // useEffect(() => { reset }, []) //! 
  // useEffect(()=> mutation.isIdle=true) //!
  // useEffect(()=> mutation.status='idle') //! 
  
  console.log("mutation button :", mutation)
  
  console.log("mutation.status button:", mutation.status)
  console.log("mutation.isIdle button:", mutation.isIdle)

  return (
      <div className="pt-2 mx-auto w-max group">
      <div className={`relative z-0 h-10 px-4 font-bold text-transparent rounded-t outline-none w-max rounded-b-xl ${['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].shadow : submitButtonParams['default'].shadow}`}>
        {['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].value : submitButtonParams['default'].value}
        <input
          onClick={onClick}
          // onSubmit={() => reset({ keepIsSubmitted:false })}  //!
          type="submit"
          value={['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].value : submitButtonParams['default'].value}
          className={`${['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].position : submitButtonParams['default'].position} 
          w-max px-4 h-10 mx-auto outline-none text-white font-bold rounded-t rounded-b-xl
          ${['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].color : submitButtonParams['default'].color}`}
          disabled={['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].disabled : submitButtonParams['default'].disabled }
        />
        </div>
    </div>
  )
}