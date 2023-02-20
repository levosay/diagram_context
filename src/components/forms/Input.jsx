export const Input = ({ field, form, ...props }) => {
  return <input
    className="
      mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-400 invalid:text-pink-500
      focus:invalid:border-pink-400 focus:invalid:ring-pink-400
      "
    {...field} {...props}
  />
}
