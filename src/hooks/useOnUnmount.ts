import { useEffect } from 'react';

/**
 * useOnUnmount hook
 *
 * @param {mixed} initial
 */
 const useOnUnmount = (onUnmount: () => void) =>
  useEffect(() => {
    return () => onUnmount && onUnmount();
  }, []);

export default useOnUnmount;
