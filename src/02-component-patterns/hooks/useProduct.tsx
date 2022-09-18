import { useState, useEffect, useRef } from 'react';
import { IOnChangCountArgs, IProduct } from '../interfaces/interfaces';


interface useProductProps {
  product: IProduct,
  onChange?: (args: IOnChangCountArgs) => void,
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductProps) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange)

  const increaseBy = (value: number) => {
    const newValue = counter + value;

    if (!isControlled) {
      setCounter(newValue)
    }

    onChange && onChange({ count: newValue, product })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy
  }
}