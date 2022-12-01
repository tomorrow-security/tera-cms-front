const params = {
  idle: {
    label: 'Envoyer',
    disabled: false,
    classname: 'bg-yellow-300 cursor-pointer'
  },
  loading: {
    label: 'En cours d\'envoi ...',
    disabled: true,
    classname: 'bg-gray-400 opacity-50 cursor-not-allowed'
  },
  error: {
    label: 'Erreur',
    disabled: false,
    classname: 'bg-tc-red'
  },
  success: {
    label: 'Envoyé !',
    disabled: true,
    classname: 'bg-green-500'
  }
}

export default function ButtonSubmit ({ status = 'idle' }) {
  return (
    <input
      type="submit"
      className={`p-4 w-full text-center font-semibold rounded shadow-lg ${params[status].classname}`}
      disabled={params[status].disabled}
      value={params[status].label}
    />
  )
}
