export const Button = ({ text, className, ...props }) => {
  return (
    <button
      className={`px-4 sm:px-8 py-2 sm:py-3 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-md ${className}`}
      {...props}
    >
      {text}
    </button>
  )
}
