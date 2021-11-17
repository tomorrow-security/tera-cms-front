export default function Paragraphe({ children, lg, xl, xxl, sm }) {
  return (
    <p
      className={`md:mx-6 lg:mx-12 ${
        sm ? "text-sm lg:text-lg xl:text-xl" : ""
      } ${lg ? "text-lg md:text-xl lg:text-2xl xl:text-3xl" : ""} ${
        xl ? "text-xl md:text-2xl lg:text-3xl xl:text-4xl" : ""
      } ${xxl ? "text-2xl md:text-3xl lg:text-4xl xl:text-5xl" : ""}`}
    >
      {children}
    </p>
  )
}
