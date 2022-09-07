import { ProductCard, ProductTitle, ProductImage, ProductButtons } from '../components/'

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
      {<ProductCard product={product}>
        <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductButtons />
      </ProductCard>}

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