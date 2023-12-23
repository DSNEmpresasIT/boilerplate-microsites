
export interface IBanner {
  title: string;
  description: string;
  useful_links: [{nombre:string, url: string}];
  video_link: string;
  icon:string;
  image_url: string[];
}