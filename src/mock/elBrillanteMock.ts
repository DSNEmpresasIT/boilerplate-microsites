import { AboutComponent, CarouselData, CompanyInfoData, ContactComponent, FooterComponent, GlobalData, IBanner, WorkData } from "@/utils/types/types";
import * as Icon from 'react-feather';

export const mockCarouselData = () :CarouselData[]=> [
    {
        id: 1,
        image: 'https://swiperjs.com/demos/images/nature-1.jpg',
        title: 'Nature 1',
        description: 'Nature 1',
      },
      {
        id: 2,
        image: 'https://swiperjs.com/demos/images/nature-2.jpg',
        title: 'Nature 2',
        description: 'Nature 2',
      },
      {
        id: 3,
        image: 'https://swiperjs.com/demos/images/nature-3.jpg',
        title: 'Nature 3',
        description: 'Nature 3',
      },
      {
        id: 4,
        image: 'https://swiperjs.com/demos/images/nature-4.jpg',
        title: 'Nature 4',
        description: 'Nature 4',
      },
      {
        id: 5,
        image: 'https://swiperjs.com/demos/images/nature-5.jpg',
        title: 'Nature 5',
        description: 'Nature 5',
      },
      {
        id: 6,
        image: 'https://swiperjs.com/demos/images/nature-6.jpg',
        title: 'Nature 6',
        description: 'Nature 6',
      },
      {
        id: 7,
        image: 'https://swiperjs.com/demos/images/nature-7.jpg',
        title: 'Nature 7',
        description: 'Nature 7',
      },
      {
        id: 8,
        image: 'https://swiperjs.com/demos/images/nature-8.jpg',
        title: 'Nature 8',
        description: 'Nature 8',
      },
      {
        id: 9,
        image: 'https://swiperjs.com/demos/images/nature-9.jpg',
        title: 'Nature 9',
        description: 'Nature 9',
      },
]

export const mockAboutData = ():AboutComponent => {
  return {
    badge: 'badge',
    title: 'title',
    description: 'description',
    image_1: 'image_1',
    image_2: 'image_2',
  }
}


export const mockBannerData = ():IBanner => {
  return {
    title: 'title',
    description: 'description',
    useful_links: [{nombre:'nombre', url: 'url'}],
    video_link: 'video_link',
    icon:'icon',
    image_url: ['image_url'],
  }
}


export const mockCompanyInfoData = ():CompanyInfoData => {
  return {
    headerTitle: "Most Popular Meditation Therapy",
    headerDesc: "Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.",
    companyInfoItems: [
        {
            image: "/images/yoga/sound.jpg",
            title: "Sound Therapy",
            desc: "Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.",
            Icon: Icon.Headphones
        },
        {
            image: "/images/yoga/maditation.jpg",
            title: "Meditation",
            desc: "Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.",
            Icon: Icon.GitMerge
        },
        {
            image: "/images/yoga/relaxing.jpg",
            title: "Mindfullness",
            desc: "Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.",
            Icon: Icon.Sun
        }
    ]
  }
}

export const mockContactData = ():ContactComponent => {
  return {
    googleMapsSrc: 'googleMapsSrc',
    imageLogo: 'imageLogo',
  }
}


export const mockWorkData = ():WorkData => {
  return {
    headerTitle: "Example Header",
    headerDesc: "Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.",
    workItems: [
      {
        image: "/images/yoga/life-coach.png",
        title: "Life Coaching",
        desc: "If the distribution of letters and words is random, the reader will not be distracted from making."
      },
      {
        image: "/images/yoga/meditation.png",
        title: "Meditation & Yoga",
        desc: "If the distribution of letters and words is random, the reader will not be distracted from making."
      },
      {
        image: "/images/yoga/nutrition.png",
        title: "Nutrition",
        desc: "If the distribution of letters and words is random, the reader will not be distracted from making."
      },
      {
        image: "/images/yoga/religious.png",
        title: "Religion",
        desc: "If the distribution of letters and words is random, the reader will not be distracted from making."
      },
    ]
  }
}


export const mockFooterData = ():FooterComponent => {
  return {
    title: 'title',
    description: 'description',
    img: 'img',
  }
}

export const mockGlobalData = ():GlobalData => {
  return {
    webs: {
      facebook: 'facebook',
      instagram: 'instagram',
      linkThree: 'linkThree',
      link1: 'link1',
      link2: 'link2',
      link3: 'link3',
    },
    contactInformation: {
      phone1: 'phone1',
      phone2: 'phone2',
      adress: 'adress',
      mapUrl: 'mapUrl',
    },
  }
}