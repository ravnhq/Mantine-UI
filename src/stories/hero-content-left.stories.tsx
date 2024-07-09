import { HeroContentLeft } from "@components/hero"
import { Button } from "@mantine/core"
import { Meta, StoryObj } from "@storybook/react/*"

const meta = {
  component: HeroContentLeft,
} satisfies Meta<typeof HeroContentLeft>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    urlImage:
      "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
    title: "Hero With content left",
    description: "A Hero component with content left",
    titleProps: {
      style: {
        color: "#F2F2F2",
      },
    },
    children: (
      <Button variant="gradient" size="xl" radius="xl" my={12}>
        Button
      </Button>
    ),
  },
}
