import axios from 'axios';
import useSWR from 'swr';

export const useFetchDataProduct = ({ methodAPI, endPoint }) => {
  const { data, isLoading, error } = useSWR(
    `https://api-ximenjie.proseller-demo.com/product/api/productpreset/loaditems/webOrdering/${endPoint}`,
    (url) =>
      axios({
        method: methodAPI,
        url,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.data),
    {
      errorRetryInterval: 300000,
    }
  );
  return {
    data,
    isLoading,
    isError: error,
  };
};
