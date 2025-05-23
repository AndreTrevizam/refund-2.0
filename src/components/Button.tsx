import { ClassMerge } from "../utils/classMerge"

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
  variant?: "base" | "icon"
}

const variants = {
  button: {
    base: "h-12",
    icon: "h-12 w-12"
  }
}

export function Button({ children, className, type = "button", isLoading, variant = "base", ...rest }: Props) {
  return (
    <button type={type} disabled={isLoading} className={ClassMerge([
      "w-full bg-green-100 flex items-center justify-center rounded-lg font-bold text-white text-sm cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-wait",
      variants.button[variant], className
    ])}
      {...rest}
    >
      {children}
    </button>
  )
}