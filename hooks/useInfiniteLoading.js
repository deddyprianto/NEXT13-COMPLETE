import axios from 'axios';
import useSWRInfinite from 'swr/infinite';
import { useSelector } from 'react-redux';
const getKey = (pageIndex, previousPageData, idCategory, outletSelected) => {
  pageIndex = pageIndex + 1;
  if (previousPageData && !previousPageData.data.length) return null;
  return `https://api-ximenjie.proseller-demo.com/product/api/productpreset/loaditems/webOrdering/${outletSelected.id}/${idCategory}?page=${pageIndex}`; // SWR key
};
export const useInfiniteLoading = (idCategory) => {
  const outletSelected = useSelector(
    (state) => state.dataPersist.outletSelected
  );
  const fetcher = (url) => axios.post(url).then((res) => res.data);

  // const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);
  const { data, error, size, setSize } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getKey(pageIndex, previousPageData, idCategory, outletSelected), // Pass idCategory to getKey
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
