import { useState } from "react";
import { IOnChangCountArgs, IShoppingCard } from "../interfaces/interfaces";

export const useShoppingCard = () => {
  const [shoppingCard, setShoppingCard] = useState<{ [key: string]: IShoppingCard }>({});

  const onProductCountChange = ({ count, product }: IOnChangCountArgs) => {
    setShoppingCard(prevShoppingCard => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prevShoppingCard;

        return rest;
      }

      return ({
        ...prevShoppingCard,
        [product.id]: { ...product, count }
      })
    })
  }

  return {
    shoppingCard,
    onProductCountChange
  }
}