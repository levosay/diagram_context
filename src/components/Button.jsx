import clsx from 'clsx'

const classNameDefault = 'px-4 sm:px-8 py-2 sm:py-3 text-white bg-fuchsia-500 hover:bg-fuchsia-400 rounded-md'

export const Button = ({ text, className, ...props }) => {

  return (
    <button
      className={clsx(classNameDefault, className)}
      {...props}
    >
      {text}
    </button>
  )
}
