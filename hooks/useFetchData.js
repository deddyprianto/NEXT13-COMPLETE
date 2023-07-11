import useSWR from 'swr';
import axios from 'axios';

export const useFetchData = (endpoint) => {
  const { data, isLoading, error, mutate } = useSWR(
    `https://64a7ca17dca581464b84c889.mockapi.io/students/${endpoint}`,
    (url) =>
      axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
        .then((res) => res.data),
    {
      errorRetryInterval: 300000,
      revalidateOnFocus: false,
    }
  );

  return {
    mutate,
    data,
    isLoading,
    isError: error,
  };
};
