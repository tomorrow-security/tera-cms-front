export default function SocialLink({ name, url, logo }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="h-12 w-12 mx-1 rounded-full bg-tc-blue flex justify-center items-center"
      aria-label={name}
    >
      <div className="h-6 w-6 text-white">{logo}</div>
    </a>
  )
}
