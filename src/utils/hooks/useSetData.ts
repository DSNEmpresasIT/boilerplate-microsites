import { useDataContext } from "@/context/data-context/DataContext"
import { DataContextActionTypes } from "@/context/data-context/types";
import { useEffect } from "react";

export const useSetData = (type: DataContextActionTypes) => {
  const { state, dispatch } = useDataContext();

  useEffect(() => {
    // Here we can use a service with querys, it will be handled by the param type we send it above 
    dispatch({
      type,
      payload: {
        
      }
    })
  }, [state])
}
