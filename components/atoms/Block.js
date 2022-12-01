export default function Block ({ children }) {
  return (
    <div className="py-4 md:py-10 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  )
}
