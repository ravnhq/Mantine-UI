import classes from "./header-mega-menu.module.scss"
import { HeaderWithMegaMenuProps } from "./header-mega-menu.types"
import {
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  rem,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

export function HeaderMegaMenu({
  menuItems,
  rightContent,
  logo,
}: HeaderWithMegaMenuProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {logo}
          <Group h="100%" gap={0} visibleFrom="sm">
            {menuItems.map((item) => item)}
          </Group>
          {rightContent && <Group visibleFrom="sm">{rightContent}</Group>}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1_000_000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`}>
          <Divider my="sm" />
          {menuItems.map((item) => item)}
          {rightContent && (
            <>
              <Divider my="sm" />
              <Group justify="center" grow pb="xl" px="md">
                {rightContent}
              </Group>
            </>
          )}
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
