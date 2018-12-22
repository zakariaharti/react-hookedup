import { useEffect } from 'react';

/**
 * useInput hook
 *
 * @param {mixed} initial
 */
 const useOnMount = (onMount: () => void) =>
   useEffect(() => {
     onMount && onMount();
   }, []);

export default useOnMount;
