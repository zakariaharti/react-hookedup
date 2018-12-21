import { useState, useCallback } from 'react';

const useBoolean = (initale: any) => {
  const [value, setValue] = useState(initale);
  return{
    value,
    setValue,
    toggle: useCallback(() => setValue((value: any) => !value), []),
    setTrue: useCallback(() => setValue(true), []),
    setFalse: useCallback(() => setValue(false), []),
  }
}

export default useBoolean;
