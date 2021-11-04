const params = {
  idle: {
    label: 'Envoyer',
    disabled: false,
    classname: 'bg-tc-blue cursor-pointer'
  },
  loading: {
    label: 'En cours d\'envoi ...',
    disabled: true,
    classname: 'bg-tc-blue opacity-50 cursor-not-allowed'
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
      className={`py-2 px-4 rounded font-bold text-white ${params[status].classname}`}
      disabled={params[status].disabled}
      value={params[status].label}
    />
  )
}
