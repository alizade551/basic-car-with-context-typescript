import useCart from '../hooks/useCart';
import Nav from './Nav';

type PropTypes = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropTypes) => {
  const { totalItems, totalPrice } = useCart();
  const content = (
    <header>
      <div className='header'>
        <div className='header__title-bar'>
          <h1>CART.C</h1>
          <div className='header_price-box'>
            <p>Total items : {totalItems}</p>
            <p>Total price : {totalPrice} </p>
          </div>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );

  return content;
};

export default Header;
