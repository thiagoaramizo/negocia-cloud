import { InputHTMLAttributes } from "react"

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  value: string
  title: string
  required?: boolean
  requiredWarning?: boolean
}

export function InputRadio ({name, value, title, required=false, requiredWarning=false, disabled=false, ...props}: InputRadioProps) {

  return (
    <div className="flex gap-10">
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer aria-disabled:cursor-not-allowed items-center rounded-full"
          htmlFor={name+value}
          aria-disabled={disabled}
        >
          <input
            {...props}
            disabled={disabled}
            id={name+value}
            value={value}
            name={name}
            type="radio"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer disabled:cursor-not-allowed appearance-none rounded-full border border-green-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-green-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-500 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </div>
        </label>
        <label
          className="mt-px cursor-pointer aria-disabled:cursor-not-allowed select-none text-sm font-medium leading-6 text-gray-900 pl-1"
          htmlFor={name+value}
          aria-disabled={disabled}
        >
          {title}
        </label>
      </div>
    </div>
  )
}