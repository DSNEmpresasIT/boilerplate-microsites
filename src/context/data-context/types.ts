import { AboutComponent, CarouselData, CompanyInfoData, ContactComponent, FooterComponent, GlobalData, IBanner, WorkData } from "@/utils/types/types";
import { Dispatch } from "react";

export enum DataContextActionTypes {
  GENERAL_CHANGE = 'GENERAL_CHANGE_DATA',
  BANNER_SECTION_CHANGE = 'BANNER_CHANGE_DATA',
  ABOUT_SECTION_CHANGE = 'ABOUT_CHANGE_DATA',
  CONTACT_SECTION_CHANGE = 'CONTACT_CHANGE_DATA',
  CAROUSEL_SECTION_CHANGE = 'CAROUSEL_CHANGE_DATA',
  COMPANY_SECTION_CHANGE =  'COMPANY_CHANGE_DATA',
  WORK_SECTION_CHANGE = 'WORK_CHANGE_DATA',
  GLOBAL_DATA_CHANGE = 'GLOBAL_DATA_CHANGE',
  FOOTER_SECTION_CHANGE = 'FOOTER_SECTION_CHANGE'
}

export interface DataContextState {
  banner: {
    isActive: boolean;
    data: IBanner;
  };
  about: {
    isActive: boolean;
    data: AboutComponent;
  };
  contact: {
    isActive: boolean;
    data: ContactComponent;
  };
  carousel: {
    isActive: boolean;
    data: CarouselData[];
  };
  companyInfo: {
    isActive: boolean;
    data: CompanyInfoData;
  };
  footerData: {
    isActive: boolean;
    data: FooterComponent;
  };
  workData: {
    isActive: boolean;
    data: WorkData;
  };
  globalData: GlobalData;
}

export type DataContextStateTypes = {
  state: DataContextState,
  dispatch: Dispatch<DataContextAction>
}

export interface DataContextAction {
  type: any,
  payload: any
}