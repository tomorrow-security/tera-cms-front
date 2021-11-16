export default function Paragraphe({ children, lg, xl, xxl }) {
  return (
    <p
      className={`my-6 md:mx-6 lg:mx-12 ${lg ? "lg:text-lg 2xl:text-xl" : ""} ${
        xl ? "text-xl md:text-2xl 2xl:text-3xl" : ""
      } ${xxl ? "text-2xl md:text-3xl 2xl:text-4xl" : ""}`}
    >
      {children}
    </p>
  )
}
