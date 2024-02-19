import {
  gray,
  slate,
  slateA,
  blue,
  red,
  green,
  grayDark,
  slateDark,
  slateDarkA,
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
    ...slateA,
    ...blue,
    ...red,
    ...green,
  },
  dark: {
    ...indigoDark,
    ...grayDark,
    ...slateDark,
    ...slateDarkA,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
}
