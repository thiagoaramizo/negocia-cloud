import { ButtonHTMLAttributes, ReactNode } from "react"
import CircleNotch from "./icons/CircleNotch"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'primary' | 'secondary'
  isLoading?: boolean
}

export const Button = ( {children, variant='primary', isLoading=false, className, ...props}: ButtonProps ) => {

  const variantStyle = (variant === 'primary') ? ' bg-emerald-500 not:disable:hover:bg-emerald-800 ' : ' bg-slate-400 not:disable:hover:bg-slate-600 '


  return (
    <button {...props} className={'flex items-center justify-center gap-2 leading-6 rounded-md px-4 py-2 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-101  ' + variantStyle + className}>
      {isLoading && <CircleNotch className="animate-spin w-4 fill-white"/>}
      <span>{children}</span>
    </button>
  )
}