'use client';

import { sessionStatus } from '@/utils/session';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth(Component) {
  return function WithAuth(props) {
    const session = sessionStatus;
    useEffect(() => {
      if (!session) {
        redirect('/outlet');
      }
    }, []);
    if (!session) {
      return null;
    }
    return <Component {...props} />;
  };
}
