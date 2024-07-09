import classes from "./hero-content-left.module.scss"
import { HeroContentLeftProps } from "./hero-content-left.types"
import { Container, Overlay, Text, Title } from "@mantine/core"

export function HeroContentLeft({
  title,
  description,
  children,
  descriptionProps,
  titleProps,
  urlImage,
}: HeroContentLeftProps) {
  return (
    <div
      className={classes.hero}
      style={{ backgroundImage: `url(${urlImage})` }}
    >
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title} {...titleProps}>
          {title}
        </Title>
        <Text
          className={classes.description}
          size="xl"
          mt="xl"
          {...descriptionProps}
        >
          {description}
        </Text>
        {children}
      </Container>
    </div>
  )
}
