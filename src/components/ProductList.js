import Product from './Product';

const ProductList = ({ products, onAddToCart }) => (
  <div className="products__box">
    {products.map(product => (
      <Product key={product.id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);

export default ProductList;
