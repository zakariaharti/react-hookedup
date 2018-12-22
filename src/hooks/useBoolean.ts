import { useState, useCallback } from 'react';

/**
 * useBoolean hook
 *
 * @param {mixed} initial
 */
const useBoolean = (initial: any) => {
  const [value, setValue] = useState(initial);
  return{
    value,
    setValue,
    toggle: useCallback(() => setValue((value: any) => !value), []),
    setTrue: useCallback(() => setValue(true), []),
    setFalse: useCallback(() => setValue(false), []),
  }
}

export default useBoolean;
