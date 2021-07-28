export default function InputButtonSimple({ defaultValue, onClick }) {
  // TODO améliorer le style un fois cliqué

  return (
  <div className="pt-8 mx-auto w-max group">
    <div className="relative z-0 h-10 px-4 mx-auto font-bold text-transparent transition-colors duration-700 border rounded-t shadow outline-none cursor-pointer w-max rounded-b-xl bg-tc-blue-light border-tc-blue-dark group-hover:bg-tc-red-light group-hover:border-tc-red-dark group-hover:shadow-none">
      {defaultValue}
      <input
        type="submit"
        value={defaultValue}
        className="absolute left-0 z-20 h-10 px-4 mx-auto font-bold text-white transition-colors duration-700 transform rounded-t shadow outline-none cursor-pointer -top-15/100 w-max rounded-b-xl bg-tc-blue group-hover:bg-tc-red group-hover:shadow-none group-hover:-top-20/100 active:translate-y-20/100"
        onClick={onClick}
      />
    </div>
    </div>
  )
}