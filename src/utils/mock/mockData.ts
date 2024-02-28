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
    badge: 'Líder en Faena Bovina',
    title: 'Frigorífico El Brillante SRL',
    description: 'El Brillante es un frigorífico líder en la provincia de Entre Ríos, Argentina, con más de 30 años de experiencia en la faena de ganado bovino. Reconocido por su compromiso con la calidad y la innovación, El Brillante se destaca por su infraestructura moderna, sus procesos certificados y su enfoque en la exportación de productos cárnicos. Ubicado estratégicamente en la región agropecuaria del litoral argentino, El Brillante ofrece un amplio abanico de productos y servicios, respaldados por un equipo profesional altamente capacitado y una sólida trayectoria en el mercado nacional e internacional.',
    image_1: "/images/images-ElBrillante/elbrillante-1.jpeg",
    image_2: "/images/images-ElBrillante/elbrillante-2.jpeg",
  }
}


export const mockBannerData = ():IBanner => {
  return {
    title: 'Frigorífico El Brillante SRL',
    description: 'Líder en la faena de ganado bovino en Entre Ríos, Argentina. Más de 30 años de excelencia en la industria cárnica.',
    useful_links: [{name:'nombre', url: 'url'}],
    video_link: 'https://www.youtube.com/embed/y-NDLn95Hgs?si=vOMk_Rra0rRuJ6Vo&amp;start=9',
    icon:'/images/images-ElBrillante/logoDark.png',
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
    googleMapsSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13622.329221377997!2d-58.02625848261718!3d-31.398078899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ade8040a01d287%3A0x4705fab9fcbdf5a2!2sDsn%20Empresas!5e0!3m2!1ses!2sar!4v1703631288199!5m2!1ses!2sar',
    imageLogo: '/images/images-ElBrillante/logoLight.png',
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
    logoDark: '/images/images-ElBrillante/logoDark.png',
    logoLight: '/images/images-ElBrillante/logoLight.png',
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
      adress: 'Provincia de Entre Ríos, Argentina.',
      mapUrl: 'mapUrl',
      schedule: 'Schedule'
    },
  }
}