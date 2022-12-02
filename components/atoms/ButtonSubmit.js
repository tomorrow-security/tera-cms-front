const params = {
  idle: {
    label: 'Envoyer',
    disabled: false,
    classname: 'bg-tangerine cursor-pointer'
  },
  loading: {
    label: 'En cours d\'envoi ...',
    disabled: true,
    classname: 'bg-stormy cursor-not-allowed'
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
      className={`p-4 w-full text-center font-semibold shadow-lg ${params[status].classname}`}
      disabled={params[status].disabled}
      value={params[status].label}
    />
  )
}
