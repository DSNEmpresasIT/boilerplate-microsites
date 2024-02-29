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
    image_1: "/images/images-ElBrillante/about/elBrillante_about_1.jpg",
    image_2: "/images/images-ElBrillante/about/elBrillante_about_2.jpg",
  }
}


export const mockBannerData = ():IBanner => {
  return {
    title: 'Frigorífico El Brillante SRL',
    description: 'Líder en la faena de ganado bovino en Entre Ríos, Argentina. Más de 30 años de excelencia en la industria cárnica.',
    video_link: 'https://www.youtube.com/embed/y-NDLn95Hgs?si=vOMk_Rra0rRuJ6Vo&amp;start=9',
    icon:'/images/images-ElBrillante/logoDark.png',
    useful_links: [{label:'nombre', link: 'url'}],
    image_url: ['image_url'],
  }
}


export const mockCompanyInfoData = ():CompanyInfoData => {
  return {
    headerTitle: "Líder en Faena de Ganado Bovino",
    headerDesc: "Descubre las instalaciones y procesos innovadores de Frigorífico El Brillante en la provincia de Entre Ríos, Argentina. Con más de 30 años de experiencia en la faena de ganado bovino, nuestro compromiso con la calidad y la excelencia nos ha convertido en referentes del sector.",
    companyInfoItems: [
        {
            image: "/images/images-ElBrillante/instalaciones.jpg",
            title: "Instalaciones del Frigorífico",
            desc: "Esta imagen muestra las extensas instalaciones del Frigorífico El Brillante ubicado en la provincia de Entre Ríos, Argentina. Con una superficie total de 20 hectáreas y más de 1780 m2 construidos, el frigorífico cuenta con infraestructura moderna y bien equipada para la faena de ganado bovino, porcino y ovino.",
            Icon: Icon.Headphones
        },
        {
            image: "/images/images-ElBrillante/procesoDeFaena.jpg",
            title: "Proceso de Faena",
            desc: " Esta imagen ilustra el proceso de faena en el Frigorífico El Brillante. Con una capacidad de faena de 90 animales diarios en un turno de 9 horas, la planta frigorífica opera con eficiencia y precisión para garantizar la calidad y seguridad de sus productos cárnicos.",
            Icon: Icon.GitMerge
        },
        {
            image: "/images/images-ElBrillante/productoTerminado.png",
            title: "Producto Terminado",
            desc: " Esta imagen presenta los productos cárnicos terminados y listos para su distribución en el mercado nacional e internacional. El Frigorífico El Brillante se destaca por su compromiso con la calidad y la innovación en la industrialización de la producción, ofreciendo una amplia gama de cortes de carne bovina, porcina y ovina, así como menudencias y productos elaborados.",
            Icon: Icon.Sun
        }
    ]
  }
}

export const mockContactData = ():ContactComponent => {
  return {
    googleMapsSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.7281283481548!2d-58.21322178787798!3d-32.184605273807975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ae2e73d2dc630b%3A0x6c08b9ffd11f3a94!2sFrigorifico%20El%20Brillante%20Srl!5e0!3m2!1ses-419!2sar!4v1709159832846!5m2!1ses-419!2sar",
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
    title: 'Frigorífico El Brillante',
    description: 'Comprometidos con la calidad y la innovación en la faena de ganado bovino, porcino y ovino. Descubre nuestra amplia gama de productos cárnicos y servicios especializados',
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
      mapUrl: 'https://www.google.com/maps/place/Frigorifico+El+Brillante+Srl/@-32.1847395,-58.2110189,3a,90y,69.67h,87.84t/data=!3m10!1e1!3m8!1sq2fhKGvPxPHc3QxU4V0yuA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dq2fhKGvPxPHc3QxU4V0yuA%26cb_client%3Dsearch.gws-prod.gps%26w%3D211%26h%3D120%26yaw%3D67.41841%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!9m2!1b1!2i36!4m22!1m15!4m14!1m5!1m1!1s0x95ae32e40315e8b9:0x969e4d40e0ab969!2m2!1d-63.8415527!2d-36.8224776!1m6!1m2!1s0x95ae2e73d2dc630b:0x6c08b9ffd11f3a94!2sFrigorifico+El+Brillante+Srl,+Dr.+Tavella+3283,+E3283+San+José,+Entre+Ríos!2m2!1d-58.2107598!2d-32.184642!3e0!3m5!1s0x95ae2e73d2dc630b:0x6c08b9ffd11f3a94!8m2!3d-32.1846053!4d-58.2106415!16s%2Fg%2F11c30t2j60?entry=ttu',
      schedule: 'Lunes - Viernes: 9:00 - 12:00'
    },
  }
}