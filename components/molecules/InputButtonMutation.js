export default function InputButtonMutation({mutation}) {
  
  const submitButtonParams = {
    loading: {
      value: 'En cours d\'envoi ...',
      color: 'bg-tc-red-medium',
      position:'absolute left-0 top-0 z-20',
      shadow: 'bg-tc-red-xlight border border-tc-red-dark border-t-0',
      disabled: true
    },
    success: {
      value: 'Envoyé !',
      color: 'bg-tc-blue-medium',
      position:'absolute left-0 -top-20/100 z-20',
      shadow: 'bg-tc-blue-xlight border border-tc-blue border-t-0',
      disabled: true
    },
    default: {
      value: 'Envoyer',
      color: 'bg-tc-blue group-hover:bg-tc-red shadow group-hover:shadow-none cursor-pointer  transition-colors duration-700 group-hover:-top-20/100 transform active:translate-y-20/100',
      position:'absolute left-0 -top-15/100 z-20',
      shadow: 'bg-tc-blue-light border border-tc-blue-dark group-hover:bg-tc-red-light group-hover:border-tc-red-dark shadow group-hover:shadow-none cursor-pointer  transition-colors duration-700',
      disabled: false
    }
  }

    return (
       <div className="pt-2 mx-auto w-max group">
        <div className={`relative z-0 h-10 px-4 font-bold text-transparent rounded-t outline-none cursor-pointer w-max rounded-b-xl ${['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].shadow : submitButtonParams['default'].shadow}`}>
          {['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].value : submitButtonParams['default'].value}
          <input
          type="submit"
          value={['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].value : submitButtonParams['default'].value}
          className={`${['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].position : submitButtonParams['default'].position} w-max px-4 h-10 mx-auto
              outline-none cursor-pointer text-white font-bold rounded-t rounded-b-xl ${['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].color : submitButtonParams['default'].color}`}
          disabled={['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].disabled : submitButtonParams['default'].disabled }
          />
          </div>
      </div>
    )
}