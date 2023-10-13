import { addProduct } from "../store/store";
import { useDispatch } from "react-redux/es/exports";

interface ComponentProps {
  price: string,
  type: string,
}

const ProductDisplay = (props: ComponentProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({price: props.price, type: props.type}));
  };

  return(
    <div className="flex flex-col items-center justify-center w-40 h-32 bg-gray-200 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold">{props.type} ¥{props.price}</h1>
      <button className="mr-2 ml-auto mb-2 px-4 mt-auto text-xl text-white bg-red-500 hover:opacity-80 rounded-3xl"
      onClick={() => handleClick()}>カート</button>
    </div>
  );
};

export default ProductDisplay;