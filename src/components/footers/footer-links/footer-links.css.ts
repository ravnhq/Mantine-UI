import { vars } from "../../../theme"
import { rem } from "@mantine/core"
import { style } from "@vanilla-extract/css"

export const footer = style({
  marginTop: rem(120),
  paddingTop: `calc(${vars.spacing.xl} * 2)`,
  paddingBottom: `calc(${vars.spacing.xl} * 2)`,
  backgroundColor: `light-dark(${vars.colors.gray[0]},${vars.colors.dark[6]} )`,
  borderTopStyle: "solid",
  borderTopWidth: rem(1),
  borderTopColor: `light-dark(${vars.colors.gray[2]},${vars.colors.dark[5]} )`,
})

export const logo = style({
  maxWidth: rem(200),
})

export const description = style({
  marginTop: rem(5),
})

export const inner = style({
  display: "flex",
  justifyContent: "space-between",
})

export const groups = style({
  display: "flex",
  flexWrap: "wrap",
})

export const wrapper = style({
  width: rem(160),
})

export const link = style({
  display: "block",
  color: `light-dark(${vars.colors.gray[6]},${vars.colors.dark[1]} )`,
  fontSize: vars.fontSizes.sm,
  paddingTop: rem(3),
  paddingBottom: rem(3),
})

export const title = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: "700",
  fontFamily: `Greycliff CF,${vars.fontFamily}`,
  marginBottom: `calc(${vars.spacing.xs} / 2)`,
  color: `light-dark(${vars.colors.black},${vars.colors.white} )`,
})

export const afterFooter = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: vars.spacing.xl,
  paddingTop: vars.spacing.xl,
  paddingBottom: vars.spacing.xl,
  borderTopStyle: "solid",
  borderTopWidth: rem(1),
  borderTopColor: `light-dark(${vars.colors.gray[2]},${vars.colors.dark[4]} )`,
})

export const social = style({})

// .link {
//   display: block;
//   color: light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-1));
//   font-size: var(--mantine-font-size-sm);
//   padding-top: toRem(3px);
//   padding-bottom: toRem(3px);

//   &:hover {
//     text-decoration: underline;
//   }
// }

// .title {
//   font-size: var(--mantine-font-size-lg);
//   font-weight: 700;
//   font-family:
//     Greycliff CF,
//     var(--mantine-font-family);
//   margin-bottom: calc(var(--mantine-spacing-xs) / 2);
//   color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
// }

// .afterFooter {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: var(--mantine-spacing-xl);
//   padding-top: var(--mantine-spacing-xl);
//   padding-bottom: var(--mantine-spacing-xl);
//   border-top: toRem(1px) solid
//     light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));

//   @media (max-width: $mantine-breakpoint-sm) {
//     flex-direction: column;
//   }
// }

// .social {
//   @media (max-width: $mantine-breakpoint-sm) {
//     margin-top: var(--mantine-spacing-xs);
//   }
// }

// .footer {
//   margin-top: toRem(120px);
//   padding-top: calc(var(--mantine-spacing-xl) * 2);
//   padding-bottom: calc(var(--mantine-spacing-xl) * 2);
//   background-color: light-dark(
//     var(--mantine-color-gray-0),
//     var(--mantine-color-dark-6)
//   );
//   border-top: toRem(1px) solid
//     light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
// }

// .logo {
//   max-width: toRem(200px);

//   @media (max-width: $mantine-breakpoint-sm) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// }

// .description {
//   margin-top: toRem(5px);

//   @media (max-width: $mantine-breakpoint-sm) {
//     margin-top: var(--mantine-spacing-xs);
//     text-align: center;
//   }
// }

// .inner {
//   display: flex;
//   justify-content: space-between;

//   @media (max-width: $mantine-breakpoint-sm) {
//     flex-direction: column;
//     align-items: center;
//   }
// }

// .groups {
//   display: flex;
//   flex-wrap: wrap;

//   @media (max-width: $mantine-breakpoint-sm) {
//     display: none;
//   }
// }

// .wrapper {
//   width: toRem(160px);
// }
