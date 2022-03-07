import SliderImg from 'constants/img/slider1.jpg'
import { CLEAR_STATE } from './types'

export type TStateWebSiteData = {
    sliderElements: TSliderElements[],
    aboutInfoImages: TAboutCarouselImages[],
    aboutTechnologyImages: TAboutCarouselImages[]
}

/** Part of data for slider */
export type TSliderElements = {
    label: string,
    path: string,
    isVideo: boolean
}

export const SliderElements = [
  {
    label: 'Slider image 1',
    path: SliderImg,
    isVideo: false
  },
  {
    label: 'Slider image 1',
    path: 'https://www.drutex.eu/media/_upload/glowna_strona/banery/20171219/video/1920x940-firma-animacja.mp4',
    isVideo: true
  },
  {
    label: 'Slider image 2',
    path: 'https://www.drutex.eu/media/_upload/promocja_mb86/animacja_mb86si_promocjana_www__2.mp4',
    isVideo: true
  },
  {
    label: 'Slider image 3',
    path: 'https://www.drutex.eu/media/_upload/glowna_strona/banery/animacja_iglo_energy_classic_masa_antracyt.mp4',
    isVideo: true
  },
  {
    label: 'Slider image 4',
    path: 'https://www.drutex.eu/media/_upload/glowna_strona/banery/20171219/video/1920x940-rolety.mp4',
    isVideo: true
  },
  {
    label: 'Slider image 5',
    path: 'https://www.drutex.eu/media/_upload/praca_handlowiec_2021.jpg',
    isVideo: false
  }
]

/** Part of about layout */
export type TAboutCarouselImages = {
  src: string
}

export const AboutInfoCarouselImages = [
  {
    src: require('constants/img/company/2.jpg').default
  },
  {
    src: require('constants/img/company/3.jpg').default
  },
  {
    src: require('constants/img/company/4.jpg').default
  },
  {
    src: require('constants/img/company/5.jpg').default
  },
  {
    src: require('constants/img/company/6.jpg').default
  },
  {
    src: require('constants/img/company/7.jpg').default
  },
  {
    src: require('constants/img/company/8.jpg').default
  },
  {
    src: require('constants/img/company/9.jpg').default
  },
  {
    src: require('constants/img/company/10.jpg').default
  },
  {
    src: require('constants/img/company/11.jpg').default
  },
  {
    src: require('constants/img/company/12.jpg').default
  },
  {
    src: require('constants/img/company/13.jpg').default
  },
  {
    src: require('constants/img/company/14.jpg').default
  },
  {
    src: require('constants/img/company/15.jpg').default
  },
  {
    src: require('constants/img/company/16.jpg').default
  },
  {
    src: require('constants/img/company/17.jpg').default
  },
  {
    src: require('constants/img/company/18.jpg').default
  },
  {
    src: require('constants/img/company/19.jpg').default
  },
  {
    src: require('constants/img/company/20.jpg').default
  },
  {
    src: require('constants/img/company/21.jpg').default
  },
  {
    src: require('constants/img/company/22.jpg').default
  },
  {
    src: require('constants/img/company/23.jpg').default
  },
  {
    src: require('constants/img/company/24.jpg').default
  },
  {
    src: require('constants/img/company/25.jpg').default
  }
]

export const AboutTechnologyCarouselImages = [
  {
    src: require('constants/img/aboutTech/1.jpg').default
  },
  {
    src: require('constants/img/aboutTech/2.jpg').default
  },
  {
    src: require('constants/img/aboutTech/3.jpg').default
  },
  {
    src: require('constants/img/aboutTech/4.jpg').default
  }
]

export type TActionEvent = {
    type:
        typeof CLEAR_STATE;
    payload?:
        undefined
        | string
}
