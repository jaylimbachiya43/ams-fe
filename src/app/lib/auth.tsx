'use client'
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

function useAuth() {
  const { data: session, status } = useSession();

  useEffect(() => {
    // You can add additional logic here if needed
  }, [session, status]);

  return {
    user: session?.user || null, // Access the authenticated user
    isLoading: status === 'loading',
    isAuthenticated: status === 'authenticated',
  };
}

export default useAuth;
