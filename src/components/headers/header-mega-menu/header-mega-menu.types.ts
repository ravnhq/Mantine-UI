import { type ButtonProps } from "@mantine/core"

interface ISubMenudata {
  // Todo: Discuss type for icons
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  title: string
  description: string
}

interface ImenuData {
  title: string
  isSubMenu: boolean
}

export type HeaderWithMegaMenuProps = {
  primaryButtontitle?: string
  primaryButtonProps?: ButtonProps
  secondarybuttontitle?: string
  secondaryButtonProps?: ButtonProps
  subMenuItems: ISubMenudata[]
  menuItems: ImenuData[]
}
