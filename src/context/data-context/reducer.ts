import { DataContextAction, DataContextActionTypes, DataContextState } from "./types";

export const reducer = (state: DataContextState, action: DataContextAction): DataContextState => {
  switch (action.type) {
    case DataContextActionTypes.ABOUT_SECTION_CHANGE:
      return {
        ...state,
        about: action.payload
      }; 
    case DataContextActionTypes.BANNER_SECTION_CHANGE:
      return {
        ...state,
        banner: action.payload
      }
    case DataContextActionTypes.COMPANY_SECTION_CHANGE:
      return {
        ...state,
        companyInfo: action.payload
      }
    case DataContextActionTypes.CONTACT_SECTION_CHANGE:
      return {
        ...state,
        contact: action.payload
      }
    case DataContextActionTypes.GLOBAL_DATA_CHANGE:
      return {
        ...state,
        globalData: action.payload
      }
    case DataContextActionTypes.FOOTER_SECTION_CHANGE:
      return {
        ...state,
        footerData: action.payload
      }
    default:
      return state;
  }
}