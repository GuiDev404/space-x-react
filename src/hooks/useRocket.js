import { useLocation, useParams } from "react-router-dom";
import { ROCKETS_LIST_URL } from "../services/request";
import { useFetch } from "./useFetch";

export const useRocket = ({ initialData = {} } = {}) => {
  const { id } = useParams();
  const { state: detailPreLoad } = useLocation();

  const { loading, data: details, error } = useFetch({
    url: `${ROCKETS_LIST_URL}/${id}`,
    initialData: detailPreLoad || initialData,
  });

  return {
    loading, 
    details,
    error
  }
}

export default useRocket