import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct';
import { IProductContext, IProductCardProps } from '../interfaces/interfaces';



// Unique styles for components by creating modules
import styles from '../styles/styles.module.css'


// Context
export const ProductContext = createContext({} as IProductContext);
const { Provider } = ProductContext;


// Main components
export const ProductCard = ({ product, children, className, style, onChange, value }: IProductCardProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <section className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </section>
    </Provider>
  )
}

/*
OPTION 2
import { ProductImage, ProductTitle, ProductButtons } from './';
import { useProduct } from '../hooks/useProduct';
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
*/