import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Link to="/" className="header__link">
        <div className="header__logo">Logo</div>
        <div className="header__title">My Shop</div>
      </Link>
    </div>
    <div className="header__right">
      <Link to="/cart" className="header__right-summary">
        Cart
      </Link>
    </div>
  </header>
);

export default Header;
