import { FooterLinks } from "@components/footers"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: FooterLinks,
} satisfies Meta<typeof FooterLinks>

export default meta

type Story = StoryObj<typeof meta>

const linksMockData = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
]

export const Default: Story = {
  args: {
    footerLabel:
      "Build fully functional accessible web applications faster than ever",
    yearLabel: "© 2020 mantine.dev. All rights reserved.",
    linksData: linksMockData,
  },
}
