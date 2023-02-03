import { useLocation, useParams } from 'react-router-dom';
import { LAUNCHES_LIST_URL } from '../services/request';
import { useFetch } from './useFetch';

export const useLaunch = ({ initialData = {} } = {}) => {
  const { id } = useParams();
  const { state: detailPreload } = useLocation();

  const { loading, data: details, error } = useFetch({
    url: `${LAUNCHES_LIST_URL}/${id}`,
    initialData: detailPreload || initialData,
  });

  return {
    loading,
    details,
    error,
  };
};

export default useLaunch;
