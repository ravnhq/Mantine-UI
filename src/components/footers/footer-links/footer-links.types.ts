import { ReactNode } from "react"

interface Link {
  label: string
  link: string
}

interface LinkColumn {
  title: string
  links: Link[]
}

export type FooterLinksProps = {
  leftContent?: ReactNode
  copyRightContent?: ReactNode
  linksData: LinkColumn[]
  socialContent?: ReactNode
}
