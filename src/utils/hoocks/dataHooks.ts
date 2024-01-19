import { useEffect, useState } from "react"
// change the import according to the required mock "../mock/elBrillanteMock" or from ".../mock/otherClientMock".
import { mockAboutData, mockBannerData, mockCarouselData, mockCompanyInfoData, mockContactData, mockFooterData, mockGlobalData, mockWorkData } from "../mock/elBrillanteMock"
import { AboutComponent, CarouselData, CompanyInfoData, ContactComponent, FooterComponent, GlobalData, IBanner, WorkData } from '../types/types'

interface UseDataProps<T> {
  // fetchData: () => Promise<T>; // Uncomment when the API is available
  fetchData: () => T ;// remove when the API is available
  initialState: T | (() => T);
  errorMessage: string;
}

const useData = <T>({
  fetchData,
  initialState,
  errorMessage,
}: UseDataProps<T>) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        // Uncomment when the API is available
        // const result = await fetchData();
        // setData(result);

        // For testing purposes, use mock data and remove when the API is available (const mockResult = fetchData() and setData(mockResult))
        const mockResult =  fetchData();
        setData((prevData) => {
          // Compare the previous data with the new data to avoid unnecessary re-renders
          return JSON.stringify(prevData) !== JSON.stringify(mockResult)
            ? mockResult
            : prevData;
        });
      } catch (error:any) {
        console.error(`Error in useData: ${errorMessage}`, error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, [fetchData, initialState, errorMessage]);

  return { data, loading };
};

export const useCarouselData = () => {
  return useData({
    fetchData:  mockCarouselData,
    initialState: [],
    errorMessage: "Error in useCarouselData",
  });
};

export const useAboutMeData = () => {
  return useData({
    fetchData: mockAboutData,
    initialState: undefined,
    errorMessage: "Error in useAboutMeData",
  });
}

export const useBannerData = () => {
 return useData({
    fetchData: mockBannerData,
    initialState: undefined,
    errorMessage: "Error in useBannerData",
  });
}

export const useCompanyInfoData = () => {
  return useData({
    fetchData: mockCompanyInfoData,
    initialState: {} as CompanyInfoData,
    errorMessage: "Error in useCompanyInfoData",
  });
}

export const useWorkData = () => {
  return useData({
    fetchData: mockWorkData,
    initialState: {} as WorkData,
    errorMessage: "Error in useWorkData",
  });
}

export const useContactData = () => {
 return useData({
    fetchData: mockContactData,
    initialState: undefined,
    errorMessage: "Error in useContactData",
  });
}

export const useFooterData = () => {
  return useData({
    fetchData: mockFooterData,
    initialState: undefined,
    errorMessage: "Error in useFooterData",
  });
}

export const useGlobalData = () => {
  return useData({
    fetchData: mockGlobalData,
    initialState: undefined,
    errorMessage: "Error in useGlobalData",
  })
}