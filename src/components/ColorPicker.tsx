import { HexColorInput, HexColorPicker } from "react-colorful";


interface ColorPickerProps {
  color: string
  setColor: ( color: string ) => void
  title: string
}

export function ColorPicker ( { color, setColor, title} : ColorPickerProps ) {
  return (
    <div className="flex flex-col items-center gap-4 p-4 pt-6 border rounded-lg relative">
      <label className="block text-sm font-medium leading-6 text-gray-900 absolute -top-3 bg-white px-2">{title}</label>
      <HexColorPicker color={color} onChange={setColor} />
      <HexColorInput color={color} onChange={setColor} className="block w-24 text-center rounded-md border border-gray-300 px-3 py-1.5 mt-2 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 focus:border-green-500 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:opacity-50" />
    </div>
  )
}