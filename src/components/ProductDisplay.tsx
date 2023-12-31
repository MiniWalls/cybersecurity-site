import { addProduct, updateProduct, selectProducts } from "../store/store";
import { useDispatch, useSelector } from "react-redux/es/exports";

interface ComponentProps {
  price: number,
  name: string,
  image: string,
}

const ProductDisplay = (props: ComponentProps): JSX.Element => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleClick = () => {
    if(products.some(product => product.type === props.name)){
      //What a messy 2 lines maybe it can be simplified
      let amount = products.find(product => product.type === props.name)?.amount; 
      amount = amount ? amount + 1 : 1;

      dispatch(updateProduct({price: props.price, type: props.name, amount: amount}));
    } else {
      dispatch(addProduct({price: props.price, type: props.name, amount: 1}));
    }
  };

  return(
    <div className="flex flex-col items-center justify-center w-[168px] h-[132px] bg-gray-200 rounded-lg shadow-lg">
      <img className="h-16 w-2/3 object-cover pt-2" src={props.image} alt="not found"/>
      <h1 className="text-xl font-bold">{props.name} ¥{props.price}</h1>
      <button className="mr-2 ml-auto mb-2 px-4 mt-auto text-xl text-white bg-red-500 hover:opacity-80 rounded-3xl"
      onClick={() => handleClick()}>カート</button>
    </div>
  );
};

export default ProductDisplay;