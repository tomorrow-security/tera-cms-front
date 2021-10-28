export default function Frame({ url, name }) {
  return (
    <div>
      <iframe
        className="w-full h-screen mx-auto border-0 shadow-monday"
        id={name}
        src={url}
      ></iframe>
    </div>
  )
}
