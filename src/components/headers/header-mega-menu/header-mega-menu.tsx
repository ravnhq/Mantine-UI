import classes from "./header-mega-menu.module.scss"
import { HeaderWithMegaMenuProps } from "./header-mega-menu.types"
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  rem,
  useMantineTheme,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"

export function HeaderMegaMenu({
  primaryButtonProps,
  primaryButtontitle = "Log In",
  secondaryButtonProps,
  secondarybuttontitle = "Sign Up",
  subMenuItems,
  menuItems,
}: HeaderWithMegaMenuProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const theme = useMantineTheme()

  const links = subMenuItems.map((subItem) => (
    <UnstyledButton className={classes.subLink} key={subItem.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <subItem.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {subItem.title}
          </Text>
          <Text size="xs" c="dimmed">
            {subItem.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={0} visibleFrom="sm">
            {menuItems.map((item) => {
              return (
                <>
                  {item.isSubMenu ? (
                    <HoverCard
                      width={600}
                      position="bottom"
                      radius="md"
                      shadow="md"
                      withinPortal
                    >
                      <HoverCard.Target>
                        <a href="#" className={classes.link}>
                          <Center inline>
                            <Box component="span" mr={5}>
                              Features
                            </Box>
                            <IconChevronDown
                              style={{ width: rem(16), height: rem(16) }}
                              color={theme.colors.blue[6]}
                            />
                          </Center>
                        </a>
                      </HoverCard.Target>

                      <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                        <Group justify="space-between" px="md">
                          <Text fw={500}>Features</Text>
                          <Anchor href="#" fz="xs">
                            View all
                          </Anchor>
                        </Group>

                        <Divider my="sm" />

                        <SimpleGrid cols={2} spacing={0}>
                          {links}
                        </SimpleGrid>

                        <div className={classes.dropdownFooter}>
                          <Group justify="space-between">
                            <div>
                              <Text fw={500} fz="sm">
                                Get started
                              </Text>
                              <Text size="xs" c="dimmed">
                                Their food sources have decreased, and their
                                numbers
                              </Text>
                            </div>
                            <Button variant="default">Get started</Button>
                          </Group>
                        </div>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  ) : (
                    <a href="#" className={classes.link}>
                      {item.title}
                    </a>
                  )}
                </>
              )
            })}
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default" {...primaryButtonProps}>
              {primaryButtontitle}
            </Button>
            <Button {...secondaryButtonProps}>{secondarybuttontitle}</Button>
          </Group>

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
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1_000_000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          {menuItems.map((item) => {
            return (
              <>
                {item.isSubMenu ? (
                  <>
                    <UnstyledButton
                      className={classes.link}
                      onClick={toggleLinks}
                    >
                      <Center inline>
                        <Box component="span" mr={5}>
                          Features
                        </Box>
                        <IconChevronDown
                          style={{ width: rem(16), height: rem(16) }}
                          color={theme.colors.blue[6]}
                        />
                      </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                  </>
                ) : (
                  <a href="#" className={classes.link}>
                    {item.title}
                  </a>
                )}
              </>
            )
          })}

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
