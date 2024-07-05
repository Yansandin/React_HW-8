
const Product = ({ product, onAddToCart }) => (
  <div className="product">
    <img src={product.image} alt={product.title} className="img_product" />
    <div className="product__title">{product.title}</div>
    <div className="product__price">${product.price}</div>
    <button className="product-button_addcart" onClick={() => onAddToCart(product)}>
      Add to cart
    </button>
  </div>
);

export default Product;
