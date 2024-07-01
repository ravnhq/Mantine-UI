// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { MantineProvider, useMantineColorScheme } from "@mantine/core"
import "@mantine/core/styles.css"
import { addons } from "@storybook/preview-api"
import React, { useEffect } from "react"
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode"

const channel = addons.getChannel()

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme()
  const handleColorScheme = (value: boolean) =>
    setColorScheme(value ? "dark" : "light")

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme)
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel])

  return <>{children}</>
}

export const decorators = [
  (renderStory: () => React.ReactNode) => (
    <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
  ),
  (renderStory: () => React.ReactNode) => (
    <MantineProvider>{renderStory()}</MantineProvider>
  ),
]
