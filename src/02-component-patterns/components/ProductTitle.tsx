import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

interface IProductTitleProps {
  title: string,
  className?: string,
  style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: IProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title || product.title}
    </span>)
}
