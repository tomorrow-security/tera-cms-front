export default function InputButton({loadingValue, successValue, defaultValue }) {
    
  switch (status) {
    case 'loading':
      return (
        <div className="w-auto pt-2 mx-auto group">
          <div className="relative z-0 h-10 px-4 font-bold text-transparent border border-t-0 rounded-t outline-none cursor-pointer w-max rounded-b-xl bg-tc-red-xlight border-tc-red-dark">
            {loadingValue}
            <input
              type="submit"
              value={loadingValue}
              className="absolute top-0 left-0 z-20 h-10 px-4 mx-auto font-bold text-white rounded-t outline-none cursor-pointer w-max rounded-b-xl bg-tc-red-medium"
              disabled
            />
          </div>
        </div>
      )
    case 'success':
      return (
        <div className="w-auto pt-2 mx-auto group">
          <div className="relative z-0 h-10 px-4 font-bold text-transparent border border-t-0 rounded-t outline-none cursor-pointer w-max rounded-b-xl bg-tc-blue-xlight border-tc-blue">
            {successValue}
            <input
              type="submit"
              value={successValue}
              className="absolute left-0 z-20 h-10 px-4 mx-auto font-bold text-white rounded-t outline-none cursor-pointer bg-tc-blue-medium -top-20/100 w-max rounded-b-xl"
              disabled
            />
          </div>
        </div>
      )
    default:
      return (
        <div className="w-auto pt-2 mx-auto group">
          <div className="relative z-0 h-10 px-4 font-bold text-transparent transition-colors duration-700 border rounded-t shadow outline-none cursor-pointer w-max rounded-b-xl bg-tc-blue-light border-tc-blue-dark group-hover:bg-tc-red-light group-hover:border-tc-red-dark group-hover:shadow-none">
            {defaultValue}
            <input
              type="submit"
              value={defaultValue}
              className="absolute left-0 z-20 h-10 px-4 mx-auto font-bold text-white transition-colors duration-700 transform rounded-t shadow outline-none cursor-pointer -top-15/100 w-max rounded-b-xl bg-tc-blue group-hover:bg-tc-red group-hover:shadow-none group-hover:-top-20/100 active:translate-y-20/100"
            />
          </div>
        </div>
      )
  }
}