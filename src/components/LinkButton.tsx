import { ReactNode } from "react"
import Link from "next/link"


interface ButtonProps {
  children: ReactNode
  href: string
}

export const LinkButton = ( {href, children }: ButtonProps ) => {


  return (
    <Link href={href} className={'flex items-center justify-center gap-2 leading-6 rounded-md px-4 py-2 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-101 bg-emerald-600 not:disable:hover:bg-emerald-800 '}>
      <span>{children}</span>
    </Link>
  )
}