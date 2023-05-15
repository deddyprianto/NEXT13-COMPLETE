import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import { setData } from './store/dataSlice';

const Page = async () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default Page;
