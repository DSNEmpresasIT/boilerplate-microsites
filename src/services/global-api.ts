import { CarrouselData } from '@/utils/types/types'
import axios from 'axios'

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_GLOBAL_API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})


export const getCarouselData = async(): Promise<CarrouselData[]>  => {
    try {
        const response = await instance.get('');
        return response.data;
      } catch (error: any) {
        throw new Error(`Error fetching carousel data`, error.message);
      }
}

