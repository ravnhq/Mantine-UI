interface Links {
  label: string
  link: string
}

interface LinkColumn {
  title: string
  links: Links[]
}

export type FooterLinksProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo?: any
  footerLabel?: string
  yearLabel?: string
  linksData: LinkColumn[]
}
