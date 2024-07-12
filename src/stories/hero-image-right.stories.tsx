import { HeroImageRight } from "@components/hero"
import { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: HeroImageRight,
} satisfies Meta<typeof HeroImageRight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
