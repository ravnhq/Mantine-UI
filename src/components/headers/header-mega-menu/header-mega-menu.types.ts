import { ReactNode } from "react"

export interface HeaderWithMegaMenuProps {
  logo?: ReactNode
  rightContent?: ReactNode
  menuItems: ReactNode[]
}
