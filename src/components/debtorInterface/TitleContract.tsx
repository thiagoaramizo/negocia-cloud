import { AppContext } from "@/context/AppContext"
import { ReactNode, useContext } from "react"

interface SubtitleProps {
  children: ReactNode
}

export function TitleContract ( {children}: SubtitleProps) {

  const {appConfig} = useContext(AppContext)
  const primaryColor = appConfig.appInterface.colors.primary
  const background = appConfig.appInterface.colors.background

  return (
    <h2 className="text-lg font-bold mt-4 mb-1 px-2 py-1.5 rounded-full text-center w-full leading-tight " style={{color: primaryColor, backgroundColor: background}}>
      {children}
    </h2>
  )
}