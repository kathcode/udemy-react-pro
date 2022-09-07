import { createContext, useState } from 'react'
import { IProductContext, IProductCardProps } from '../interfaces/interfaces';



// Unique styles for components by creating modules
import styles from '../styles/styles.module.css'


// Context
export const ProductContext = createContext({} as IProductContext);
const { Provider } = ProductContext;


// Main components
export const ProductCard = ({ product, children }: IProductCardProps) => {
  const [counter, setCounter] = useState(0);

  return (
    <Provider value={{ counter, setCounter, product }}>
      <section className={styles.productCard}>
        {children}
      </section>
    </Provider>
  )
}

/*
OPTION 2
import { ProductImage, ProductTitle, ProductButtons } from './';
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
*/