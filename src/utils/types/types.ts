
export interface IBanner {
  title: string;
  description: string;
  useful_links: [{nombre:string, url: string}];
  video_link: string;
  icon:string;
  image_url: string[];
}

export interface AboutComponent {
  badge: string;
  title: string;
  description: string;
  image_1: string;
  image_2: string;
}

export interface ContactComponent {
  googleMapsSrc: string;
  imageLogo: string;
}

export interface FooterComponent {
    title?:string;
    description?:string;
    img?:string;
}

export interface GlobalData { 
  webs?: Webs
  contactInformation?: contactInformation
}

export interface Webs {
  facebook?:string,
  instagram?: string,
  linkThree?: string,
  link1?: string,
  link2?: string,
  link3?: string,
}

export interface CarrouselData {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface contactInformation {
  phone1?:string,
  phone2?:string,
  adress?:string,
  mapUrl?: string,
}
