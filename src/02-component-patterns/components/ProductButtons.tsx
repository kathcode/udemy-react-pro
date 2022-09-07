import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export const ProductButtons = () => {
  const { counter, setCounter } = useContext(ProductContext);

  return (<section className={styles.buttonsContainer}>
    <button
      onClick={() => setCounter(prev => prev - 1)}
      className={styles.buttonMinus}
      disabled={counter === 0}
    > - </button>
    <div className={styles.countLabel}>{counter}</div>
    <button
      onClick={() => setCounter(prev => prev + 1)}
      className={styles.buttonAdd}
    > + </button>
  </section>)
}