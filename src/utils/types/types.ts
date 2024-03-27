export interface IBanner {
  title?: string;
  description?: string;
  useful_links?: [{ label:string, link: string}];
  video_link?: string;
  icon?:string;
  image_url?: string[];
}

export interface AboutComponent {
  badge?: string;
  title?: string;
  description?: string;
  image_1?: string;
  image_2?: string;
  image_3?: string;
}

export interface ContactComponent {
  googleMapsSrc?: string;
  imageLogo?: string;
}

export interface FooterComponent {
    title?:string;
    description?:string;
    img?:string;
}

export interface GlobalData { 
  logoLight?: string;
  logoDark?: string;
  webs?: Webs;
  contactInformation?: contactInformation;
}

export interface Webs {
  facebook?:string,
  instagram?: string,
  email?: string,
  linkThree?: string,
  link1?: string,
  link2?: string,
  link3?: string,
}

export interface CarouselData {
  id?: number;
  image?: string;
  title?: string;
  description?: string;
}

export interface contactInformation {
  phone1?:string,
  phone2?:string,
  adress?:string,
  mapUrl?: string,
  schedule?: string, 
}


export interface CompanyInfoData {
  headerTitle?: string;
  headerDesc?: string;
  companyInfoItems?: CompanyInfoItems[];
}

export interface CompanyInfoItems {
  title?: string;
  desc?: string;
  image?: string;
  Icon?: any;
}

export interface WorkData {
  headerTitle?: string;
  headerDesc?: string;
  workItems?: WorkItems[];
} 

export interface WorkItems {
  title?: string;
  desc?: string;
  image?: string;
}