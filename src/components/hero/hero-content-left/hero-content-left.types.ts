import { TextProps, TitleProps } from "@mantine/core"
import { ReactNode } from "react"

export interface HeroContentLeftProps {
  title?: string
  titleProps?: TitleProps
  description?: string
  descriptionProps?: TextProps
  children?: ReactNode
  urlImage?: string
}
