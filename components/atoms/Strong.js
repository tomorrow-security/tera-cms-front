export default function Strong({ children, red }) {
  return (
    <strong className={`font-bold ${red && "text-tc-red"}`}>{children}</strong>
  )
}
