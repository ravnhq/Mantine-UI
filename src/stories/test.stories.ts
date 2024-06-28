import type { Meta, StoryObj } from "@storybook/react"

import { HeaderWithMegaMenu } from "./../components/headers"

const meta = {
  component: HeaderWithMegaMenu,
} satisfies Meta<typeof HeaderWithMegaMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Storybook",
  },
}
