export default function SubTitle({ title, iconPicture }) {
  return (
    <div className="flex flex-row items-center justify-center px-20 py-2 mx-auto mb-2 border-b border-opacity-25 w-max border-tc-red flex-nowrap md:mb-4">
      <div
        className="w-12 h-12 bg-center bg-no-repeat bg-contain"
        style={iconPicture}
      ></div>
      <div className="ml-2 text-xl font-bold text-center md:text-2xl xl:text-3xl text-tc-red">
        {title}
      </div>
    </div>
  )
}
