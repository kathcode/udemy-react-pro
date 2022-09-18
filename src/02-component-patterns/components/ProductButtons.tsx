import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'


interface IProductButtonsProps {
  className?: string,
  style?: CSSProperties
}

export const ProductButtons = ({ className, style }: IProductButtonsProps) => {
  const { counter, increaseBy } = useContext(ProductContext);

  return (<section
    className={`${styles.buttonsContainer} ${className}`}
    style={style}
  >
    <button
      onClick={() => increaseBy(-1)}
      className={styles.buttonMinus}
      disabled={counter === 0}
    > - </button>
    <div className={styles.countLabel}>{counter}</div>
    <button
      onClick={() => increaseBy(+1)}
      className={styles.buttonAdd}
    > + </button>
  </section>)
}