import { InputHTMLAttributes, ReactNode } from "react"


interface BasicInputProps  {
  name: string
  title: string
  value: Date
  onChange: (date: Date | null) => void
}

export function InputDatePicker ({name, title, value, onChange}: BasicInputProps) {

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">{title}</label>
      <div  className="mt-1">

      </div>
    </div>
  )
}

interface CalendarContainerProps {
  children: ReactNode
}

function CalendarContainer({children}: CalendarContainerProps) {
  return (
    <div>
      {children}
    </div>
  )
}