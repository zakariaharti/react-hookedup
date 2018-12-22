import { useState, useCallback } from 'react';

/**
 * useInput hook
 *
 * @param {mixed} initial
 */
const useInput = (initial: any) => {
  const isNumber = typeof initial === 'number';
  const [value, setValue] = useState(initial);
  const onChange = useCallback((e: any ) => setValue(e.target.value), []);

  return{
    value,
    setValue,
    hasValue:
      value !== undefined &&
      value !== null &&
      (!isNumber ? value.trim && value.trim() !== "" : true),
    clear: useCallback(() => setValue(""), []),
    onChange,
    bindToInput: {
      onChange,
      value
    },
    bind: {
      onChange: setValue,
      value
    }
  }
}

export default useInput;
