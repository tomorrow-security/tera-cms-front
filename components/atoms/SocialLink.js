export default function SocialLink({ name, url, logo }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center w-12 h-12 mx-1 rounded-full bg-tc-blue"
      aria-label={name}
    >
      <div className="w-6 h-6 text-white">{logo}</div>
    </a>
  )
}
