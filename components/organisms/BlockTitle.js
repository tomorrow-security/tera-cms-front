const titleLayoutStyle = "ml-2 box-border w-max"
const titleTextStyle =
  "text-center text-2xl sm:text-3xl md:text-5xl font-bold text-tc-red"
const titleBorderStyle = "border-b border-tc-red"
const iconLayoutStyle =
  "w-16 h-16 md:w-20 md:h-20 bg-center bg-contain bg-no-repeat"
const titleBlock =
  " my-8 px-4 pb-8 flex flex-row flex-nowrap justify-center box-border items-center w-full"

export default function BlockTitle({ title, iconPicture }) {
  return (
    <div className={`${titleBorderStyle} ${titleBlock}`}>
      <div style={iconPicture} className={`${iconLayoutStyle}`}></div>
      <h2 className={`${titleLayoutStyle} ${titleTextStyle}`}>{title}</h2>
    </div>
  )
}
