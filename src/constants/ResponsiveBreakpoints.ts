export const size = {
  xsmall: '576px',
  small: '768px',
  medium: '992px',
  large: '1200px',
  extralarge: '1400px'
}

export const calcSize = {
  xsmall: 576,
  small: 768,
  medium: 992,
  large: 1200,
  extralarge: 1400,
  hd: 1920
}

export const devices = {
  xs: `(min-width: 0px) and (max-width: ${size.xsmall})`,
  sm: `(min-width: ${size.xsmall}) and (max-width: ${size.small})`,
  md: `(min-width: ${size.small}) and (max-width: ${size.medium})`,
  lg: `(min-width: ${size.medium}) and (max-width: ${size.large})`,
  xl: `(min-width: ${size.large}) and (max-width: ${size.extralarge})`
}
