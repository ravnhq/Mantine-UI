// import { type ButtonProps } from "@mantine/core"
import { ReactNode } from "react"

interface ImenuData {
  title: string
  link: string
}

export type HeaderWithMegaMenuProps = {
  menuIcon?: ReactNode
  subMenuContent?: ReactNode
  rightContent?: ReactNode
  menuItems: ImenuData[]
}
