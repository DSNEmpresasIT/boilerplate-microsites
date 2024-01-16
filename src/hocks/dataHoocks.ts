import { useEffect, useState } from "react"
// change the import according to the required mock "../mock/elBrillanteMock" or from ".../mock/otherClientMock".
import { mockAboutData, mockBannerData, mockCarouselData, mockCompanyInfoData, mockContactData, mockFooterData, mockGlobalData, mockWorkData } from "../mock/elBrillanteMock"
import { AboutComponent, CarouselData, CompanyInfoData, ContactComponent, FooterComponent, GlobalData, IBanner, WorkData } from '../utils/types/types'

export const useCarouselData = () => {
  const [carouselData, setCarouselData] = useState<CarouselData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: uncomment when the api is available
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

export const useAboutMeData = () => {
  const [aboutData, setAboutData] = useState<AboutComponent>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: uncomment when the api is available
        // const data = await getAboutData();
        // setAboutData(data);
        setAboutData(mockAboutData)
      } catch (error:any) {
        console.error(`Error in useAboutData: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  return { aboutData, loading };
}

export const useBannerData = () => {
  const [bannerData, setBannerData] = useState<IBanner>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: uncomment when the api is available
        // const data = await getBannerData();
        // setBannerData(data);
        setBannerData(mockBannerData)
      } catch (error:any) {
        console.error(`Error in useBannerData: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  return { bannerData, loading };
}

export const useCompanyInfoData = () => {
  const [companyInfoData, setCompanyInfoData] = useState<CompanyInfoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: uncomment when the api is available
        // const data = await getCompanyInfoData();
        // setCompanyInfoData(data);
        setCompanyInfoData(mockCompanyInfoData)
      } catch (error:any) {
        console.error(`Error in useCompanyInfoData: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  return { companyInfoData, loading };
}

export const useWorkData = () => {
  const [workData, setWorkData] = useState<WorkData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: uncomment when the api is available
        // const data = await getWorkData();
        // setWorkData(data);
        setWorkData(mockWorkData)
      } catch (error:any) {
        console.error(`Error in useWorkData: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  return { workData, loading };
}

export const useContactData = () => {
  const [contactData, setContactData] = useState<ContactComponent>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: uncomment when the api is available
        // const data = await getContactData();
        // setContactData(data);
        setContactData(mockContactData)
      } catch (error:any) {
        console.error(`Error in useContactData: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  return { contactData, loading };
}

export const useFooterData = () => {
  const [footerData, setFooterData] = useState<FooterComponent>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: uncomment when the api is available
        // const data = await getFooterData();
        // setFooterData(data);
        setFooterData(mockFooterData)
      } catch (error:any) {
        console.error(`Error in useFooterData: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  return { footerData, loading };
}

export const useGlobalData = () => {
  const [globalData, setGlobalData] = useState<GlobalData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: uncomment when the api is available
        // const data = await getGlobalData();
        // setGlobalData(data);
        setGlobalData(mockGlobalData)
      } catch (error:any) {
        console.error(`Error in useFooterData: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []);

      return { globalData, loading };
}