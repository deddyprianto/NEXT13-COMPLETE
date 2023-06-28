'use client';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider } from 'next-auth/react';

const ProviderSession = ({ children, session }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </PersistGate>
    </Provider>
  );
};
export default ProviderSession;
