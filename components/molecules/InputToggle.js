export default function InputToggle({ onClick, checked }) {
    const firstYear = checked ? '-top-8' : 'top-1'
    const thirdYear = checked ? 'top-1' : '-top-8'
    const background = checked ? 'bg-tc-blue-light' : 'bg-tc-red-light'

    return (
        <div
            className={`relative inline-block w-16 h-8 rounded-full ${background} overflow-hidden cursor-pointer z-10`}
            onClick={onClick}
        >
            <div className={`
                    absolute block left-1 w-6 h-6
                    bg-tc-blue rounded-full 
                    cursor-pointer outline-none appearance-none z-20
                    transition-all duration-300 ease-toggle
                    ${firstYear}
                `}></div>
            <div className={`
                    absolute block right-1 w-6 h-6
                    bg-tc-red rounded-full
                    cursor-pointer outline-none appearance-none z-20
                    transition-all duration-300 ease-toggle
                    ${thirdYear}
                `}></div>
        </div>
    )
}