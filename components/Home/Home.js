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
import { isEmptyArray, isEmptyObject } from "@/helper/isEmpty";
import { setCountCart } from "@/store/dataPersistedSlice";
import axios from "axios";

export default function Home({ token, dataPromoBanner }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadDataCart = async () => {
      try {
        const { data: datacart } = await axios.get(
          "https://api-ximenjie.proseller-demo.com/ordering/api/cart/getcart",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.value}`,
            },
          }
        );
        if (datacart && !datacart?.data) {
          dispatch(setCountCart(0));
        } else {
          dispatch(setCountCart(datacart?.data?.details?.length));
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      loadDataCart();
    }
  }, []);

  const isRefreshPage = useSelector((state) => state.dataUser.isRefreshPage);
  const router = useRouter();
  const outletSelected = useSelector(
    (state) => state.dataPersist.outletSelected
  );
  const { data } = useFetchDataProduct({
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
      console.log(outletSelected);
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
    return (
      <div className="pb-16">
        <div
          className="text-blue-500 font-bold text-center w-full my-2 cursor-pointer text-sm flex items-center justify-center"
          onClick={() => router.push("/outlet")}
        >
          <MapPinIcon className="h-5 w-5" />
          {outletSelected?.name}
        </div>
        <Slider dataPromoBanner={dataPromoBanner} />

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
  };
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      {renderMainComponent()}
    </StateProvider>
  );
}
