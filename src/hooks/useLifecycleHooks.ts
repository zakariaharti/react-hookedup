import { useEffect } from 'react';

/**
 * useLifecycleHooks hook
 *
 * @param {mixed} initial
 */
 const useLifecycleHooks = (eLifecycleHooks: {
   onMount: () => void,
   onUnmount: () => void
 }) => () =>
  useEffect(() => {
    eLifecycleHooks.onMount && eLifecycleHooks.onMount();
    return () => eLifecycleHooks.onUnmount && eLifecycleHooks.onUnmount();
  }, []);


export default useLifecycleHooks;
