import { useEffect } from 'react';

/**
 * useInterval hook
 */
const useInterval = (fn: () => void, delay: number) => {
  useEffect(() => {
    const id = setInterval(fn, delay)
    return () => clearInterval(id)
  })
};

export default useInterval;
