export default function Button ({ label, fullWidth }) {
  return (
    <button className={`p-4 ${fullWidth ? 'w-full' : 'w-max'} text-center font-semibold bg-yellow-300 hover:bg-yellow-400 rounded shadow-lg`}>
      {label}
    </button>
  )
}
