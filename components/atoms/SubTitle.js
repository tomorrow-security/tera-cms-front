export default function SubTitle({ title, iconPicture }) {
  return (
    <div className="flex flex-row items-center justify-center py-2 mx-auto my-2 border-b border-opacity-25 md:px-20 w-max border-tc-red flex-nowrap md:my-4">
      <div
        className="w-10 h-10 bg-center bg-no-repeat bg-contain"
        style={iconPicture}
      ></div>
      <h2 className="ml-4 text-lg font-bold text-center md:text-2xl xl:text-3xl text-tc-red">
        {title}
      </h2>
    </div>
  )
}
