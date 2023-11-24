'use client';
import Items from './Items';
import NavbarHome from './NavbarHome';
import Slider from './Slider';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useRouter, redirect } from "next/navigation";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { StateProvider } from "../StateContext";
import { initialState, reducer } from "@/helper/reducer";
import { useFetchDataProduct } from "@/hooks/useFetchDataProduct";
import { useFetchPromoBanner } from "@/hooks/useFetchPromoBanner";
import { isEmptyArray, isEmptyObject } from "@/helper/isEmpty";
import { useFetchData } from "@/hooks/useFetchData";
import { setCountCart } from "@/store/dataPersistedSlice";

export default function Home({ token }) {
  const dispatch = useDispatch();
  const isRefreshPage = useSelector((state) => state.dataUser.isRefreshPage);
  const router = useRouter();
  const outletSelected = useSelector(
    (state) => state.dataPersist.outletSelected
  );
  const { data: datacart } = useFetchData({
    token: token.value,
    endpoint: "getcart",
  });
  if (datacart?.status === "SUCCESS") {
    dispatch(setCountCart(datacart.data.details.length));
  } else {
    dispatch(setCountCart(0));
  }
  const { data: dataPromoBanner, isLoading: isLoadingPromoBanner } =
    useFetchPromoBanner();
  const { data, isLoading } = useFetchDataProduct({
    idOutlet: outletSelected.id,
    payload: {
      skip: 0,
      take: 500,
    },
  });

  const [saveIdCategory, setSaveIdCategory] = useState("");
  const firstThreeItems = data?.data?.slice(0, 3);
  const remainingItems = data?.data?.slice(3);

  useEffect(() => {
    if (data && !isEmptyArray(data.data)) {
      setSaveIdCategory(data.data[0].id);
    }
  }, [data]);

  useEffect(() => {
    if (outletSelected) {
      if (isEmptyObject(outletSelected)) {
        redirect("/outlet");
      }
    }
  }, []);

  useEffect(() => {
    if (isRefreshPage) {
      window.location.reload();
    }
  }, [isRefreshPage]);

  const renderMainComponent = () => {
    if (isLoading || isLoadingPromoBanner) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="pb-16">
          <Slider dataPromoBanner={dataPromoBanner} />
          <div
            className="text-blue-500 font-bold text-center w-full my-2 cursor-pointer text-sm flex items-center justify-center"
            onClick={() => router.push("/outlet")}
          >
            <MapPinIcon className="h-5 w-5" />
            {outletSelected?.name}
          </div>
          <NavbarHome
            setSaveIdCategory={setSaveIdCategory}
            saveIdCategory={saveIdCategory}
            firstThreeItems={firstThreeItems}
            remainingItems={remainingItems}
          />
          {!isEmptyObject(data) && saveIdCategory && (
            <Items token={token} saveIdCategory={saveIdCategory} />
          )}
        </div>
      );
    }
  };
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      {renderMainComponent()}
    </StateProvider>
  );
}
