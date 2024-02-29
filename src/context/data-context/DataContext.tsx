'use client'
import { ReactNode, Reducer, createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { DataContextAction, DataContextState, DataContextStateTypes } from "./types";

const initialState: DataContextState = {
  banner: {
    isActive: true,
    data: {
      description: '',
      icon: '',
      image_url: [''],
      title: '',
      useful_links: [
        { label: '', link: '' }
      ],
      video_link: '',
    }
  },
  about: {
    isActive: true,
    data: {
      badge: '',
      description: '',
      image_1: '',
      image_2: '',
      title: ""
    }},
  carousel:{ 
    isActive: true,
    data: [
    ]
  }, 
  companyInfo:  { 
    isActive: true,
    data: {
      companyInfoItems: [
        {
          desc: '',
          Icon: undefined,
          image: '',
          title: ''
        }
      ],
      headerDesc: '',
      headerTitle: ''
    }
  },
  contact: {
    isActive: true,
    data: {
      googleMapsSrc: '',
      imageLogo: ''
    }
  },
  workData: {
    isActive: true,
    data: {
      headerDesc: '',
      headerTitle: '',
      workItems: [
        {
          title: '',
          desc: '',
          image: ''
        }
      ]
    }
  },
  footerData: {
    isActive: true,
    data: {
      title: '',
      description: '',
      img:'',
    }
  },
  globalData: {
    webs: {
      facebook: '',
      instagram: '',
      link1: '',
      link2: '',
      link3: '',
      linkThree: ''
    },
    contactInformation: {
      adress: '',
      mapUrl: '',
      phone1: '',
      phone2: '',
      schedule: ''
    }
  }
}

const DataContext = createContext({} as DataContextStateTypes);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [ state, dispatch ] = useReducer<Reducer<DataContextState, DataContextAction>>(reducer, initialState)

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => useContext(DataContext);
