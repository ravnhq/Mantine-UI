import type { Meta, StoryObj } from "@storybook/react"
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
} from "@tabler/icons-react"
import { HeaderMegaMenu } from "@components/headers"

const meta = {
  component: HeaderMegaMenu,
} satisfies Meta<typeof HeaderMegaMenu>

export default meta

type Story = StoryObj<typeof meta>

const subMenuMockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
]

const menuMockData = [
  {
    title: "Home",
    isSubMenu: false,
  },
  {
    title: "Features",
    isSubMenu: true,
  },
]

export const Default: Story = {
  args: {
    primaryButtonProps: {
      style: {
        color: "red",
      },
    },
    secondaryButtonProps: {
      variant: "filled",
      style: {
        color: "red",
      },
    },
    menuItems: menuMockData,
    subMenuItems: subMenuMockdata,
  },
}
