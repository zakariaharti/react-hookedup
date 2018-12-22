import { useEffect } from 'react';

/**
 * useTimeout hook
 */
const useTimeout = (fn: () => void, delay: number) => {
  useEffect(() => {
    const id = setTimeout(fn, delay)
    return () => clearTimeout(id)
  })
};

export default useTimeout;
