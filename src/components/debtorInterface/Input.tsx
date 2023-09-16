import { AppContext } from "@/context/AppContext"
import { InputHTMLAttributes, useContext } from "react"
import { hex } from "wcag-contrast"

interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  title: string
}

export function Input ({name, title, required, disabled, className, ...props}: BasicInputProps) {

  const {appConfig} = useContext(AppContext)
  const background = appConfig.appInterface.colors.background
  const primaryColor = appConfig.appInterface.colors.primary
  const textColor = hex( background, '#0f172a' ) > 4 ? '#0f172a' : '#f1f5f9'


  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium leading-6" style={{color: textColor}} >{title}</label>
      <div  className="mt-1">
        <input 
          {...props}
          id={name} 
          name={name}
          required={required}
          disabled={disabled}
          className={"block w-full rounded-md border-2 px-3 py-1.5 shadow-sm placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 " + className}
          style={{backgroundColor: background, color: textColor, borderColor: primaryColor}}
          />
      </div>
    </div>
  )
}