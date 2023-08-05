'use client';
import Items from './Items';
import NavbarHome from './NavbarHome';
import Slider from './Slider';

export default function Home({ data }) {
  return (
    <>
      <Slider />
      <NavbarHome data={data} />
      <Items />
    </>
  );
}
