import { deleteProduct } from "../store/store";
import { useDispatch } from "react-redux/es/exports";

interface ComponentProps {
  price: number,
  type: string,
  amount: number,
  image: string,
}

const ProductBasket = (props: ComponentProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteProduct(props.type));
  };

  return(
    <div className="flex flex-col items-center justify-center w-40 h-32 bg-gray-200 rounded-lg shadow-lg">
      <img className="h-16 w-2/3 object-cover" src={props.image} alt="not found"/>
      <h1 className="text-xl font-bold">{props.type} ¥{props.price}</h1>
      <p>¥{props.amount * props.price}</p>
      <button className="mr-2 ml-auto mb-2 px-4 mt-auto text-xl text-white bg-red-500 hover:opacity-80 rounded-3xl"
      onClick={() => handleClick()}>X</button>
    </div>
  );
};

export default ProductBasket;