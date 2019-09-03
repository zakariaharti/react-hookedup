import { useState, useCallback } from 'react';

/**
 * useArray hook
 *
 * @param {mixed} initial
 */
const useArray = (initial: any) => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    add: useCallback(a => setValue((v: any) => [...v, a]), []),
    clear: useCallback(() => setValue((): any => []), []),
    removeById: useCallback(
      id => setValue((arr: any) => arr.filter((v: any) => v && v.id !== id)),
      []
    ),
    removeIndex: useCallback(
      index =>
        setValue((arr: any) => arr.filter((v: any, i: any) => i !== index)),
      []
    )
  };
};

export default useArray;
