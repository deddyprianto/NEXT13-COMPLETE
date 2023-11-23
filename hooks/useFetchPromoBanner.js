import useSWR from 'swr';

export const useFetchPromoBanner = () => {
  const { data, isLoading, error, mutate } = useSWR(
    `https://api-ximenjie.proseller-demo.com/masterdata/api/promobanners/load`,
    (url) =>
      fetch(url, {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()),
    {
      errorRetryInterval: 300000,
      revalidateOnFocus: false,
    }
  );
  return {
    mutate,
    data: data?.data,
    isLoading,
    isError: error,
  };
};
