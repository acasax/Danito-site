import SliderImg1 from 'constants/slider/1.jpg'
import SliderImg2 from 'constants/slider/2.jpg'
import SliderImg3 from 'constants/slider/3.jpg'
import SliderImg4 from 'constants/slider/4.jpg'
import SliderImg5 from 'constants/slider/5.jpg'
import { CLEAR_STATE } from './types'

export type TStateWebSiteData = {
    sliderElements: TSliderElements[],
    aboutInfoImages: TAboutCarouselImages[],
    aboutTechnologyImages: TAboutCarouselImages[],
    galleryContent: TGalleyElement[]
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
    path: SliderImg1,
    isVideo: false
  },
  {
    label: 'Slider image 2',
    path: SliderImg2,
    isVideo: false
  },
  {
    label: 'Slider image 3',
    path: SliderImg3,
    isVideo: false
  },
  {
    label: 'Slider image 4',
    path: 'https://www.drutex.eu/media/_upload/glowna_strona/banery/animacja_iglo_energy_classic_masa_antracyt.mp4',
    isVideo: true
  },
  {
    label: 'Slider image 5',
    path: SliderImg4,
    isVideo: false
  },
  {
    label: 'Slider image 6',
    path: SliderImg5,
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

/** Part for galley image */

export type TGalleyImage = {
    name: string,
    src: string
}

export type TGalleyElement = {
    header: string,
    scroll: number,
    images: TGalleyImage[]
}

export const GalleryContent = [
  {
    header: 'Žarka Zrenjanina 114, 26000 Pančevo',
    scroll: 0,
    images: [
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/1.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/2.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/3.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/4.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/5.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/6.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/7.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/8.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/9.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/10.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/11.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/12.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/13.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/1/14.jpg').default
      }
    ]
  },
  {
    header: 'Žarka Zrenjanina 114, 26000 Pančevo',
    scroll: 250,
    images: [
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/1.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/2.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/3.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/4.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/5.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/6.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/7.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/8.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/9.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/10.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/11.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/12.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/13.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/2/14.jpg').default
      }
    ]
  },
  {
    header: 'Žarka Zrenjanina 114, 26000 Pančevo',
    scroll: 600,
    images: [
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/1.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/2.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/3.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/4.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/5.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/6.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/7.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/8.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/9.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/10.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/11.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/12.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/13.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/14.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/15.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/16.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/17.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/18.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/19.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/20.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/3/21.jpg').default
      }
    ]
  },
  {
    header: 'Žarka Zrenjanina 114, 26000 Pančevo',
    scroll: 1200,
    images: [
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/1.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/2.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/3.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/4.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/5.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/6.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/7.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/8.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/9.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/10.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/11.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/12.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/13.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/14.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/15.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/16.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/17.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/18.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/19.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/20.jpg').default
      },
      {
        name: 'Žarka Zrenjanina 114, 26000 Pančevo',
        src: require('constants/img/objects/4/21.jpg').default
      }
    ]
  }
]

export type TActionEvent = {
    type:
        typeof CLEAR_STATE;
    payload?:
        undefined
        | string
}
