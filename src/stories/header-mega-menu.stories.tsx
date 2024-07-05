import { HeaderMegaMenu, HeaderWithMegaMenuProps } from "@components/headers"
import { Button, Image, Menu, Text, rem } from "@mantine/core"
import type { Meta, StoryObj } from "@storybook/react"
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react"

const meta = {
  component: HeaderMegaMenu,
} satisfies Meta<typeof HeaderMegaMenu>

export default meta

type Story = StoryObj<typeof meta>

const menuMockData: HeaderWithMegaMenuProps["menuItems"] = [
  <Menu shadow="md" width={200} key={1}>
    <Menu.Target>
      <Button mx={20}>Toggle menu</Button>
    </Menu.Target>

    <Menu.Dropdown>
      <Menu.Label>Application</Menu.Label>
      <Menu.Item
        leftSection={
          <IconSettings style={{ width: rem(14), height: rem(14) }} />
        }
      >
        Settings
      </Menu.Item>
      <Menu.Item
        leftSection={
          <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
        }
      >
        Messages
      </Menu.Item>
      <Menu.Item
        leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}
      >
        Gallery
      </Menu.Item>
      <Menu.Item
        leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
        rightSection={
          <Text size="xs" c="dimmed">
            ⌘K
          </Text>
        }
      >
        Search
      </Menu.Item>

      <Menu.Divider />

      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item
        leftSection={
          <IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />
        }
      >
        Transfer my data
      </Menu.Item>
      <Menu.Item
        color="red"
        leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
      >
        Delete my account
      </Menu.Item>
    </Menu.Dropdown>
  </Menu>,
  <a key={2}>Feature</a>,
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
