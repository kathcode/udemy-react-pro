import { products } from '../data/products';
import { ProductCard, ProductTitle, ProductImage, ProductButtons } from '../components/'

import '../styles/custom-styles.css'
import { useShoppingCard } from '../hooks/useShoppingCard';


const Shopping = () => {
  const { shoppingCard, onProductCountChange } = useShoppingCard()

  return (<section>
    <h1>Shopping</h1>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {/** 
       * Compound Component Pattern
       * Parent with childrens
       */
      /** OPTION 1 */}

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-withe"
          onChange={onProductCountChange}
          value={shoppingCard[product.id]?.count || 0}
        >
          <ProductImage img={product.img} className="custom-image" />
          <ProductTitle title={product.title} className="text-white" />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
      ))}

      {/** OPTION 2
      <ProductCard product={product}>
        <ProductCard.Title title={product.title} />
        <ProductCard.Image img={product.img} />
        <ProductCard.Buttons />
      </ProductCard>*/}

    </div>
    <section className='shopping-card'>

      {shoppingCard && Object.entries(shoppingCard).map(([key, product]) => {
        const { id, count } = product;

        return (
          <ProductCard
            key={id}
            product={product}
            className="bg-dark text-withe"
            style={{ width: '100px' }}
            onChange={onProductCountChange}
            value={count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        )
      })}
    </section>
  </section>)
}

export default Shopping