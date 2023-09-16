import useCart from '../hooks/useCart';
type PropTypes = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropTypes) => {
  const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();
  const pageContetnt = viewCart ? (
    <p>Shopping Cart &copy; {year}</p>
  ) : (
    <>
      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice}</p>
      <p>Shopping Cart &copy; {year}</p>
    </>
  );

  const content = <footer className='footer'>{pageContetnt}</footer>;

  return content;
};

export default Footer;
