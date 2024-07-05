import { ReactNode } from "react"

interface ImenuData {
  title: string
  link: string
}

export type HeaderWithMegaMenuProps = {
  logo?: ReactNode
  subMenuContent?: ReactNode
  rightContent?: ReactNode
  menuItems: ImenuData[]
}
