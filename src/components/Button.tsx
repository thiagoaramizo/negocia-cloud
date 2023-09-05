import { CircleNotch } from "@phosphor-icons/react"
import { ButtonHTMLAttributes, ReactNode } from "react"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'primary' | 'secondary'
  isLoading?: boolean
}

export const Button = ( {children, variant='primary', isLoading=false, className, ...props}: ButtonProps ) => {

  const variantStyle = (variant === 'primary') ? ' bg-green-600 not:disable:hover:bg-green-700 ' : ' bg-slate-500 not:disable:hover:bg-slate-600 '


  return (
    <button {...props} className={'flex items-center justify-center gap-2 leading-6 rounded-md px-4 py-2 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-500 disabled:opacity-60 disabled:cursor-not-allowed' + variantStyle + className}>
      {isLoading && <CircleNotch size={16} weight="bold" className="animate-spin"/>}
      <span>{children}</span>
    </button>
  )
}