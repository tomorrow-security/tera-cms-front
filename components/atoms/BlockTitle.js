const titleLayoutStyle = 'mb-3 pb-3 md:pl-2'
const titleTextStyle = 'text-center md:text-left text-4xl md:text-5xl font-light text-tc-red'
const titleBorderStyle = 'border-b border-tc-red'

export default function BlockTitle({ title }) {
	return (
		<div className="mb-10">
			<h2 className={`${titleLayoutStyle} ${titleTextStyle} ${titleBorderStyle}`}>
				{title}
			</h2>
		</div>
	)
}
