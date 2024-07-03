interface Link {
  label: string
  link: string
}

interface LinkColumn {
  title: string
  links: Link[]
}

export type FooterLinksProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo?: any
  footerLabel?: string
  yearLabel?: string
  linksData: LinkColumn[]
}
