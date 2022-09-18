import { ReactElement, CSSProperties } from "react";

export interface IProductCardProps {
  product: IProduct,
  children?: ReactElement | ReactElement[],
  className?: string,
  style?: CSSProperties,
  onChange?: (args: IOnChangCountArgs) => void,
  value?: number
}

export interface IOnChangCountArgs {
  product: IProduct,
  count: number
}

export interface IProduct {
  id: string;
  title: string;
  img?: string
}

export interface IProductContext {
  counter: number;
  increaseBy: (value: number) => void,
  product: IProduct
}

export interface IShoppingCard extends IProduct {
  count: number
}