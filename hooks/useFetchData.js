import useSWR from 'swr';

export const useFetchData = ({ endpoint, token }) => {
  const { data, isLoading, error, mutate } = useSWR(
    `https://api-ximenjie.proseller-demo.com/ordering/api/cart/${endpoint}`,
    (url) =>
      fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
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
