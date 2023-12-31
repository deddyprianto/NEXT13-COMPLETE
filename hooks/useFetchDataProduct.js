import useSWR from 'swr';

export const useFetchDataProduct = ({ idOutlet, payload }) => {
  const { data, isLoading, error } = useSWR(
    `https://api-ximenjie.proseller-demo.com/product/api/productpreset/loadcategory/webOrdering/${idOutlet}`,
    (url) =>
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()),
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
