import { HeaderMegaMenu } from "@components/headers"
import { Button, Image } from "@mantine/core"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: HeaderMegaMenu,
} satisfies Meta<typeof HeaderMegaMenu>

export default meta

type Story = StoryObj<typeof meta>

const menuMockData = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Features",
    link: "#",
  },
]

const ImageIconTest = (
  <Image
    radius="md"
    h={50}
    w={50}
    fit="contain"
    src="https://www.freelogodesign.org/assets/img/logo-couleurs.jpeg"
  />
)

const rightContentTest = (
  <>
    <Button variant="default">Log in</Button>
    <Button variant="filled">Log in</Button>
  </>
)

export const Default: Story = {
  args: {
    logo: ImageIconTest,
    menuItems: menuMockData,
    rightContent: rightContentTest,
  },
}
