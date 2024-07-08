import classes from "./comment-html-content.module.scss"
import { CommentHtmlContentProps } from "./comment-html-content.types"
import { Group, Paper, TypographyStylesProvider } from "@mantine/core"

export function CommentHtml({
  icon,
  titleContent,
  htmlContent = "",
}: CommentHtmlContentProps) {
  return (
    <Paper withBorder radius="md" className={classes.comment}>
      <Group>
        {icon}
        <div>{titleContent}</div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html: `${htmlContent}`,
          }}
        />
      </TypographyStylesProvider>
    </Paper>
  )
}
