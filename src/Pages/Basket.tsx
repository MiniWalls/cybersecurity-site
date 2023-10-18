import { useSelector } from 'react-redux';
import { selectProducts } from '../store/store';
import ProductBasket from '../components/ProductBasket';

const Basket = (): JSX.Element => {
  const products = useSelector(selectProducts);

  return (
    <div className="flex flex-auto justify-center">
      <div className="grid grid-cols-4 gap-4 max-w-[60%]">
        {products.map((product, index) => (
          <ProductBasket key={index} price={product.price} type={product.type} amount={product.amount} />
        ))}
      </div>
    </div>
  );
};

export default Basket;