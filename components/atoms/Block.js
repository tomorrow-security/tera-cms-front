import classNames from "classnames"

export default function Block ({ children, darken }) {

  const wrapperClassNames = classNames(
    'py-4 md:py-10 lg:py-16 overflow-hidden',
    { 'bg-tc-lavender': darken },
  );

  const containerClassNames = classNames('container mx-auto px-4');

  return (
    <div className={wrapperClassNames} >
      <div className={containerClassNames}>
        {children}
      </div>
    </div>
  )
}
