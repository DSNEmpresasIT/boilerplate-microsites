import { DataContextAction, DataContextActionTypes, DataContextState } from "./types";

export const reducer = (state: DataContextState, action: DataContextAction): DataContextState => {
  switch (action.type) {
    case DataContextActionTypes.ABOUT_SECTION_CHANGE:
      return {
        ...state,
        about: {
          isActive: action.payload.isActive,
          data: action.payload.data
        }
      }; 
    default:
      return state;
  }
}