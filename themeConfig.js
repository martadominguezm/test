import { mdiCheckboxBlankCircleOutline } from '@mdi/js'

const themeConfig = {
  app: {
    name: 'SportLand',
    logo: require('@/assets/images/logo.png'),
    isDark: true,
    isRtl: false,
    contentLayoutNav: 'horizontal', // vertical, horizontal
    routeTransition: 'scroll-x-transition', // https://vuetifyjs.com/en/styles/transitions/#api
    // ! `semi-dark` isn't available for horizontal nav menu
    skinVariant: 'default', // default, bordered, semi-dark
    contentWidth: 'boxed',
  },
  menu: {
    isMenuHidden: false,
    isVerticalNavMini: false,
    verticalMenuAccordion: true,
    groupChildIcon: mdiCheckboxBlankCircleOutline,
    horizontalNavMenuGroupOpenOnHover: true,
  },
  appBar: {
    /*
    ! In Content Layout Horizontal Nav type `hidden` value won't work
    ! In Content Layout Horizontal Nav type value of `type` will affect both Appbar and Horizontal Navigation Menu
    */
    type: 'fixed', // fixed, static, hidden
    isBlurred: true,
  },
  footer: {
    type: 'hidden', // fixed, static, hidden
  },
  themes: {
    light: {
      primary: '#53b4fd',
      accent: '#0d6efd',
      secondary: '#8A8D93',
      success: '#56CA00',
      info: '#16B1FF',
      warning: '#FFB400',
      error: '#FF4C51',
    },
    dark: {
      primary: '#53b4fd',
      accent: '#0d6efd',
      secondary: '#8A8D93',
      success: '#56CA00',
      info: '#16B1FF',
      warning: '#FFB400',
      error: '#FF4C51',
    },
  },
}

export default themeConfig
