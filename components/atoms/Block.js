export default function Block ({ children }) {
  return (
    <div className="my-4 md:my-8 overflow-hidden">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  )
}
