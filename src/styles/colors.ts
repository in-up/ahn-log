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
  whiteA,
  blackA
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
    ...whiteA,
    ...blackA,
    bg: "#ffffff",
    elem: '#ffffff'
  },
  dark: {
    ...indigoDark,
    ...grayDark,
    ...slateDark,
    ...slateDarkA,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...whiteA,
    ...blackA,
    bg: "#212121",
    elem: "#1a1a1f"
  },
}
