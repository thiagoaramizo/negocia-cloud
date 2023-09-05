import { InputHTMLAttributes } from "react"

interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  title: string
  required?: boolean
}

export function Input ({name, title, required=false, disabled, ...props}: BasicInputProps) {

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">{title} {required && <span className="text-xs text-red-500">(Obrigatório)</span>}</label>
      <div  className="mt-1">
        <input 
          {...props}
          id={name} 
          name={name}
          required={required}
          disabled={disabled}
          className="block w-full rounded-md border border-gray-300 px-3 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 focus:border-green-500 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:opacity-50" />
      </div>
    </div>
  )
}