export default function Block ({ children, darken }) {
  return (
    <div className={`py-4 md:py-10 ${darken && 'bg-tc-lavender'}`} >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  )
}
