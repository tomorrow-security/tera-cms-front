export default function LittleTitle({ children }) {
  return (
    <div className="flex flex-row items-center max-w-full my-4 md:my-8">
      <div className="w-5 h-5 ml-5 transform rotate-45 bg-tc-red"></div>
      <h3 className="w-4/5 py-1 ml-4 text-xl font-bold md:text-2xl">
        {children}
      </h3>
    </div>
  )
}
