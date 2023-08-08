import axios from 'axios';
import useSWRInfinite from 'swr/infinite';

const getKey = (pageIndex, previousPageData, idCategory) => {
  pageIndex = pageIndex + 1;
  if (previousPageData && !previousPageData.data.length) return null;
  console.log({ dedd: idCategory });
  return `https://api-ximenjie.proseller-demo.com/product/api/productpreset/loaditems/webOrdering/2046fd47-75f3-4af3-a11a-745e1f53cc73/${idCategory}?page=${pageIndex}`; // SWR key
};
export const useInfiniteLoading = (idCategory) => {
  const fetcher = (url) => axios.post(url).then((res) => res.data);

  // const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);
  const { data, error, size, setSize } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getKey(pageIndex, previousPageData, idCategory), // Pass idCategory to getKey
    fetcher
  );

  return {
    dataResponse: data,
    isLoading: !error && !data,
    isError: error,
    size: size,
    setSize: setSize,
  };
};
