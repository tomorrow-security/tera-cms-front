export default function List({ children }) {
  return (
    <ol className="space-y-2 list-inside list-decimal lg:w-11/12 lg:mx-auto">
      {children}
    </ol>
  )
}
