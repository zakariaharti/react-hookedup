import { useState, useCallback } from 'react';

/**
 * useInput hook
 *
 * @param {mixed} initial
 */
const useCounter = (
  initial: any,
  options: {
    upperLimit?: number,
    lowerLimit?: number,
    loop?: boolean,
    step?: number
  } = {step: 1}
) => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    increase: useCallback(i => {
      setValue((value: any) => {
        const increaseBy = i !== undefined ? i : options.step;
        const nextValue = value + increaseBy;

        return options.upperLimit !== undefined
          ? nextValue - increaseBy < options.upperLimit
            ? nextValue
            : options.loop === true
              ? initial
              : value
          : nextValue;
      });
    }, []),
    decrease: useCallback(d => {
      setValue((value: any) => {
        const decreaseBy = d !== undefined ? d : options.step;
        const nextValue = value - decreaseBy;

        return options.lowerLimit !== undefined
          ? nextValue + decreaseBy > options.lowerLimit
            ? nextValue
            : options.loop === true
              ? options.upperLimit
              : value
          : nextValue;
      });
    }, [])
  };
};

export default useCounter;
