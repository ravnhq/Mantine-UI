import { CommentHtml } from "@components/comments"
import { Avatar, Text } from "@mantine/core"
import { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: CommentHtml,
} satisfies Meta<typeof CommentHtml>

export default meta

type Story = StoryObj<typeof meta>

const htmlTest = `<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>`

const iconTest = (
  <Avatar
    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
    alt="Jacob Warnhalter"
    radius="xl"
  />
)

const titleTest = (
  <>
    <Text fz="sm">Jacob Warnhalter</Text>
    <Text fz="xs" c="dimmed">
      10 minutes ago
    </Text>
  </>
)

export const Default: Story = {
  args: {
    icon: iconTest,
    htmlContent: htmlTest,
    titleContent: titleTest,
  },
}
