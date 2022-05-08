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
    path: require('constants/slider/6.mp4').default,
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
    header: 'Banjica, Beograd',
    scroll: 0,
    images: [
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/1.jpg').default
      },
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/2.jpg').default
      },
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/3.jpg').default
      },
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/4.jpg').default
      },
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/5.jpg').default
      },
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/6.jpg').default
      },
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/7.jpg').default
      }
    ]
  },
  {
    header: 'Celopečka, Beograd',
    scroll: 0,
    images: [
      {
        name: 'Celopečka, Beograd',
        src: require('constants/img/objects/2/2.jpg').default
      },
      {
        name: 'Celopečka, Beograd',
        src: require('constants/img/objects/2/3.jpg').default
      },
      {
        name: 'Celopečka, Beograd',
        src: require('constants/img/objects/2/4.jpg').default
      },
      {
        name: 'Celopečka, Beograd',
        src: require('constants/img/objects/2/5.jpg').default
      },
      {
        name: 'Celopečka, Beograd',
        src: require('constants/img/objects/2/6.jpg').default
      }
    ]
  },
  {
    header: 'Dunavske terase, Beograd',
    scroll: 0,
    images: [
      {
        name: 'Dunavske terase, Beograd',
        src: require('constants/img/objects/3/1.jpg').default
      },
      {
        name: 'Dunavske terase, Beograd',
        src: require('constants/img/objects/3/2.jpg').default
      },
      {
        name: 'Dunavske terase, Beograd',
        src: require('constants/img/objects/3/3.jpg').default
      },
      {
        name: 'Dunavske terase, Beograd',
        src: require('constants/img/objects/3/4.jpg').default
      },
      {
        name: 'Dunavske terase, Beograd',
        src: require('constants/img/objects/3/5.jpg').default
      },
      {
        name: 'Dunavske terase, Beograd',
        src: require('constants/img/objects/3/6.jpg').default
      }
    ]
  },
  {
    header: 'Karađorđeva, Beograd',
    scroll: 0,
    images: [
      {
        name: 'Karađorđeva, Beograd',
        src: require('constants/img/objects/4/1.jpg').default
      },
      {
        name: 'Karađorđeva, Beograd',
        src: require('constants/img/objects/4/2.jpg').default
      },
      {
        name: 'Karađorđeva, Beograd',
        src: require('constants/img/objects/4/3.jpg').default
      },
      {
        name: 'Karađorđeva, Beograd',
        src: require('constants/img/objects/4/4.jpg').default
      },
      {
        name: 'Karađorđeva, Beograd',
        src: require('constants/img/objects/4/5.jpg').default
      },
      {
        name: 'Karađorđeva, Beograd',
        src: require('constants/img/objects/4/6.jpg').default
      },
      {
        name: 'Karađorđeva, Beograd',
        src: require('constants/img/objects/4/7.jpg').default
      }
    ]
  },
  {
    header: 'Kopaonik',
    scroll: 0,
    images: [
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1.jpg').default
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_.jpg').default
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_3.jpg').default
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_4.jpg').default
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_5.jpg').default
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_6.jpg').default
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_7.jpg').default
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_8.jpg').default
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_9.jpg').default
      }
    ]
  },
  {
    header: 'Mia-Dorćol Beograd',
    scroll: 0,
    images: [
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1.JPG').default
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_1.JPG').default
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_2.JPG').default
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_3.JPG').default
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_4.JPG').default
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_5.jpg').default
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_6.jpg').default
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_7.jpg').default
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_8.jpg').default
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_9.jpg').default
      }
    ]
  },
  {
    header: 'Smart Blok Pančeva',
    scroll: 0,
    images: [
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1.JPG').default
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_1.JPG').default
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_2.JPG').default
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_3.JPG').default
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_4.JPG').default
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_5.JPG').default
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_6.JPG').default
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_7.JPG').default
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
