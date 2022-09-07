import { ProductCard, ProductTitle, ProductImage, ProductButtons } from '../components/'

import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee mug',
  img: 'Coffee-mug.png'
}

const Shopping = () => {
  return (<section>
    <h1>Shopping</h1>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {/** 
       * Compound Component Pattern
       * Parent with childrens
       */}
      {/** OPTION 1 */}
      <ProductCard product={product} className="text-white bg-dark">
        <ProductImage img={product.img} className="custom-image" />
        <ProductTitle title={product.title} className="text-white text-bold" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>

      <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
        <ProductImage img={product.img} style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)' }} />
        <ProductTitle title={product.title} style={{ fontWeight: 'bold' }} />
        <ProductButtons />
      </ProductCard>

      {/** OPTION 2 
      <ProductCard product={product}>
        <ProductCard.Title title={product.title} />
        <ProductCard.Image img={product.img} />
        <ProductCard.Buttons />
      </ProductCard>*/}
    </div>
  </section>)
}

export default Shopping