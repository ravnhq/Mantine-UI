import { FooterLinks } from "@components/footers"
import { ActionIcon, Text, rem } from "@mantine/core"
import type { Meta, StoryObj } from "@storybook/react"
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react"

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

const lefContentTest = (
  <div>
    <Text>Logo</Text>
    <Text>Description</Text>
  </div>
)
const copyRightContentTest = (
  <div>
    <Text>Copyright description</Text>
  </div>
)
const socialContentTest = (
  <div>
    <ActionIcon size="lg" color="gray" variant="subtle">
      <IconBrandTwitter
        style={{ width: rem(18), height: rem(18) }}
        stroke={1.5}
      />
    </ActionIcon>
    <ActionIcon size="lg" color="gray" variant="subtle">
      <IconBrandYoutube
        style={{ width: rem(18), height: rem(18) }}
        stroke={1.5}
      />
    </ActionIcon>
    <ActionIcon size="lg" color="gray" variant="subtle">
      <IconBrandInstagram
        style={{ width: rem(18), height: rem(18) }}
        stroke={1.5}
      />
    </ActionIcon>
  </div>
)

export const Default: Story = {
  args: {
    linksData: linksMockData,
    leftContent: lefContentTest,
    copyRightContent: copyRightContentTest,
    socialContent: socialContentTest,
  },
}
