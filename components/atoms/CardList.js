export default function CardList({ items, title }) {
  return (
    <div className="m-4 bg-opacity-25 border rounded border-tc-blue bg-tc-blue">
      <h3 className="py-2 font-semibold text-center text-white bg-tc-blue">
        {title}
      </h3>
      <div>
        <ul className="p-4 list-inside list-square">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
