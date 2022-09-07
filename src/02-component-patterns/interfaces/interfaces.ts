import { ReactElement } from "react";

export interface IProductCardProps {
  product: IProduct,
  children?: ReactElement | ReactElement[]
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