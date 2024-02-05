import {
  gray,
  slate,
  blue,
  red,
  green,
  grayDark,
  slateDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    ...indigo,
    ...gray,
    ...slate,
    ...blue,
    ...red,
    ...green,
  },
  dark: {
    ...indigoDark,
    ...grayDark,
    ...slateDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
}
