import * as classes from "./footer-links.css"
import { FooterLinksProps } from "./footer-links.types"
import { Container, Group, Text } from "@mantine/core"

export function FooterLinks({
  copyRightContent,
  leftContent,
  linksData,
  socialContent,
}: FooterLinksProps) {
  const groups = linksData.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>{leftContent}</div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        {copyRightContent}

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          {socialContent}
        </Group>
      </Container>
    </footer>
  )
}
