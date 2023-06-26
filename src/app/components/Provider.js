'use client';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='w-screen h-screen flex justify-center items-center'>
          {children}
        </div>
      </PersistGate>
    </Provider>
  );
};
export default Providers;
