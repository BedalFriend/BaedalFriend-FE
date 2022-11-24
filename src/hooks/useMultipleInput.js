import { useState } from 'react';

const useMultipleInput = (initObj) => {
  const [obj, setObj] = useState(initObj);

  const handler = (e) => {
    const { value, name } = e.target;
    if (
      (name === 'price',
      name === 'deliveryTime',
      name === 'targetAmount',
      name === 'deliveryFee')
    ) {
      setObj({ ...obj, [name]: parseInt(value) });
    } else {
      setObj({ ...obj, [name]: value });
    }
  };

  return [obj, setObj, handler];
};

export default useMultipleInput;
