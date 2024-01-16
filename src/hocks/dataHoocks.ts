import { useEffect, useState } from "react"
import { mockCarouselData } from "../mock/elBrillanteMock"
import { getCarouselData, instance } from "../services/global-api"
import { CarrouselData } from '../utils/types/types'



export const useCarouselDataa = ()=> {
    const mockData = mockCarouselData
    getCarouselData()

    return mockData();
}

export const useCarouselData = () => {
  const [carouselData, setCarouselData] = useState<CarrouselData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realiza la llamada asincrónica solo cuando el componente se monta
        // const data = await getCarouselData();
        // setCarouselData(data);
        setCarouselData(mockCarouselData);
      } catch (error:any) {
        console.error(`Error in useCarouselData: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  return { carouselData, loading };
};

export const useAboutMeData = ()=> {



}