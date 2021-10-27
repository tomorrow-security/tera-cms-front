export default function Bullet({ children }) {
  return (
    <div className="flex flex-row items-center max-w-full my-4 md:my-8">
      <div className="w-3 h-3 m-2 transform rotate-45 border bg-tc-red border-tc-blue"></div>
      <p className="w-4/5 py-1 ml-4 ">{children}</p>
    </div>
  )
}
