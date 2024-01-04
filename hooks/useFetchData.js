import useSWR from 'swr';

export const useFetchData = ({ endpoint, token }) => {
  const myVariable = process.env.NEXT_PUBLIC_BASE_URL_API;
  const { data, isLoading, error, mutate } = useSWR(
    `${myVariable}/crm/api/customer/sales?take=10&skip=10&page=1`,
    (url) =>
      fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        return res.json();
      }),
    {
      errorRetryInterval: 300000,
      revalidateOnFocus: false,
    }
  );

  return {
    mutate,
    dataRes: data?.data,
    isLoading,
    isError: error,
  };
};
