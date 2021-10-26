export default function List({ children }) {
  return (
    <ul className="space-y-2 list-inside list-square lg:w-11/12 lg:mx-auto">
      {/* {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))} */}
      {children}
    </ul>
  )
}
