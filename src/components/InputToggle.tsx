

interface InputToggleProps {
  name: string
  title: string
  value: boolean
  onChange: () => void
}

export function InputToggle ({name, title, value, onChange}: InputToggleProps) {

  return (
    <div>
      
      <label htmlFor={name} className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={value} id={name} className="sr-only peer" onChange={onChange} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
        <span className="ml-1.5 text-sm font-medium text-gray-900 dark:text-gray-300">{title}</span>
      </label>

    </div>
  )
}