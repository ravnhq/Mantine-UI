import classes from "./header-mega-menu.module.scss"
import { HeaderWithMegaMenuProps } from "./header-mega-menu.types"
import {
  Box,
  Burger,
  Center,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  UnstyledButton,
  rem,
  useMantineTheme,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"

export function HeaderMegaMenu({
  menuItems,
  subMenuContent,
  rightContent,
  logo,
}: HeaderWithMegaMenuProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const theme = useMantineTheme()

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {logo}
          <Group h="100%" gap={0} visibleFrom="sm">
            {menuItems.map((item, index) => {
              return (
                <HoverCard
                  width={600}
                  position="bottom"
                  radius="md"
                  shadow="md"
                  withinPortal
                  key={index}
                >
                  <HoverCard.Target>
                    <a href={item.link} className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          {item.title}
                        </Box>
                        {subMenuContent && (
                          <IconChevronDown
                            style={{ width: rem(16), height: rem(16) }}
                            color={theme.colors.blue[6]}
                          />
                        )}
                      </Center>
                    </a>
                  </HoverCard.Target>
                  {subMenuContent}
                </HoverCard>
              )
            })}
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
        padding="lg"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1_000_000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`}>
          <Divider my="sm" />
          {menuItems.map((item, index) => {
            return (
              <div key={index}>
                <UnstyledButton className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      {item.title}
                    </Box>
                    {subMenuContent && (
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    )}
                  </Center>
                </UnstyledButton>
                {subMenuContent}
              </div>
            )
          })}
          <Divider my="sm" />
          {rightContent && (
            <Group justify="center" grow pb="xl" px="md">
              {rightContent}
            </Group>
          )}
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
