import { useState, useCallback } from 'react';

const useMergeState = (initialValue: any) => {
  const [ value, setValue ] = useState(initialValue);
  return {
    setState: useCallback(v => {
      let newValue = { ...value, ...v };
      return setValue(newValue);
    }, []),
    state: value
  };
};

export default useMergeState;
