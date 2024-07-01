import { HeaderMegaMenu } from "@components/headers"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: HeaderMegaMenu,
} satisfies Meta<typeof HeaderMegaMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Menu",
    button: {
      variant: "filled",
      style: {
        color: "red",
      },
    },
  },
}
