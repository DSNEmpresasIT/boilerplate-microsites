import { AboutComponent, CarouselData, CompanyInfoData, ContactComponent, FooterComponent, IBanner, WorkData } from '@/utils/types/types'
import axios from 'axios'

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_GLOBAL_API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getAboutData = async(): Promise<AboutComponent>  => {
    try {
        const response = await instance.get('');
        return response.data;
      } catch (error: any) {
        throw new Error(`Error fetching about data`, error.message);
      }
}

export const getBannerData = async(): Promise<IBanner>  => {
    try {
        const response = await instance.get('');
        return response.data;
      } catch (error: any) {
        throw new Error(`Error fetching banner data`, error.message);
      }
}

export const getCarouselData = async(): Promise<CarouselData[]>  => {
    try {
        const response = await instance.get('');
        return response.data;
      } catch (error: any) {
        throw new Error(`Error fetching carousel data`, error.message);
      }
}

export const getCompanyInfoData = async(): Promise<CompanyInfoData>  => {
    try {
        const response = await instance.get('');
        return response.data;
      } catch (error: any) {
        throw new Error(`Error fetching company info data`, error.message);
      }
}

export const getWorkData = async(): Promise<WorkData>  => {
    try {
        const response = await instance.get('');
        return response.data;
      } catch (error: any) {
        throw new Error(`Error fetching work data`, error.message);
      }
}

export const getContactData = async(): Promise<ContactComponent>  => {
    try {
        const response = await instance.get('');
        return response.data;
      } catch (error: any) {
        throw new Error(`Error fetching contact data`, error.message);
      }
}

export const getFooterData = async(): Promise<FooterComponent>  => {
    try {
        const response = await instance.get('');
        return response.data;
      } catch (error: any) {
        throw new Error(`Error fetching footer data`, error.message);
      }
}

export const getGlobalData = async(): Promise<FooterComponent>  => {
    try {
        const response = await instance.get('');
        return response.data;
      } catch (error: any) {
        throw new Error(`Error fetching global data`, error.message);
      }
}
