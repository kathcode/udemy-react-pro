import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'


interface IProductImageProps {
  img?: string,
  className?: string,
  style?: CSSProperties
}

export const ProductImage = ({ img = '', className, style }: IProductImageProps) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      alt="Product image"
      className={`${styles.productImg} ${className}`}
      style={style}
      src={img || product.img || noImage}
    />
  )
}