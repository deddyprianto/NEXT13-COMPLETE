import useSWR from 'swr';
export const useFetchOutlets = () => {
  const configuration = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  };
  const { data, isLoading, error } = useSWR(
    `https://ordering-ximenjie.proseller-demo.com/masterdata/api/outlets/load`,
    (url) => fetch(url, configuration).then((res) => res.data),
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
