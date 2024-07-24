import { vars } from "../../../theme"
import { rem } from "@mantine/core"
import { style } from "@vanilla-extract/css"

export const header = style({
  height: rem(60),
  paddingLeft: vars.spacing.md,
  paddingRight: vars.spacing.md,
  borderBottomStyle: "solid",
  borderBottomWidth: rem(1),
  borderBottomColor: `light-dark(${vars.colors.gray[3]},${vars.colors.gray[4]} )`,

  "@media": {
    [`(max-width: ${vars.breakpoints.sm})`]: {
      backgroundColor: vars.colors.red[1],
    },
  },
})

export const link = style({
  display: "flex",
  alignItems: "center",
  height: "100%",
  paddingLeft: vars.spacing.md,
  paddingRight: vars.spacing.md,
  textDecoration: "none",
  color: `light-dark(${vars.colors.black},${vars.colors.white} )`,
  fontWeight: "500",
  fontSize: vars.fontSizes.sm,
})

export const subLink = style({
  width: "100%",
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
})
// .link {
//   display: flex;
//   align-items: center;
//   height: 100%;
//   padding-left: var(--mantine-spacing-md);
//   padding-right: var(--mantine-spacing-md);
//   text-decoration: none;
//   color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
//   font-weight: 500;
//   font-size: var(--mantine-font-size-sm);

//   @media (max-width: $mantine-breakpoint-sm) {
//     height: toRem(42px);
//     width: 100%;
//   }

//   @include hover {
//     background-color: light-dark(
//       var(--mantine-color-gray-0),
//       var(--mantine-color-dark-6)
//     );
//   }
// }

// .subLink {
//   width: 100%;
//   padding: var(--mantine-spacing-xs) var(--mantine-spacing-md);
//   border-radius: var(--mantine-radius-md);

//   @include hover {
//     background-color: light-dark(
//       var(--mantine-color-gray-0),
//       var(--mantine-color-dark-7)
//     );
//   }
// }

// .dropdownFooter {
//   background-color: light-dark(
//     var(--mantine-color-gray-0),
//     var(--mantine-color-dark-7)
//   );
//   margin: calc(var(--mantine-spacing-md) * -1);
//   margin-top: var(--mantine-spacing-sm);
//   padding: var(--mantine-spacing-md) calc(var(--mantine-spacing-md) * 2);
//   padding-bottom: var(--mantine-spacing-xl);
//   border-top: toRem(1px) solid
//     light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5));
// }
