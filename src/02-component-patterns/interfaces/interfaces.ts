import { ReactElement, CSSProperties } from "react";

export interface IProductCardProps {
  product: IProduct,
  children?: ReactElement | ReactElement[],
  className?: string,
  style?: CSSProperties
}

export interface IProduct {
  id: string;
  title: string;
  img?: string
}

export interface IProductContext {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  product: IProduct
}