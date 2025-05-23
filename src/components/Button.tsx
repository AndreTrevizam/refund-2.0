type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
}

export function Button({ children, type = "button", isLoading, ...rest }: Props) {
  return (
    <button type={type} disabled={isLoading} {...rest} className="w-full h-12 bg-green-100 rounded-lg font-bold text-white text-sm cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-wait">
      {children}
    </button>
  )
}