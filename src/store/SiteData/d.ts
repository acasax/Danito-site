import SliderImg from 'constants/img/slider1.jpg'
import { CLEAR_STATE } from './types'

export type TStateWebSiteData = {
    sliderElements: TSliderElements[]
}

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

export type TActionEvent = {
  type:
      typeof CLEAR_STATE;
  payload?:
      undefined
}
