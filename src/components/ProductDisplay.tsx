import { addProduct, updateProduct, selectProducts } from "../store/store";
import { useDispatch, useSelector } from "react-redux/es/exports";
import getImageList from "./images/imageUtil";
import { useEffect } from "react";

interface ComponentProps {
  price: string,
  type: string,
  image: string,
}

const ProductDisplay = (props: ComponentProps): JSX.Element => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleClick = () => {
    if(products.some(product => product.type === props.type)){
      //What a messy 2 lines maybe it can be simplified
      let amount = products.find(product => product.type === props.type)?.amount; 
      amount = amount ? amount + 1 : 1;

      console.log(amount);

      dispatch(updateProduct({price: props.price, type: props.type, amount: amount}));
    } else {
      dispatch(addProduct({price: props.price, type: props.type, amount: 1}));
    }
  };

  return(
    <div className="flex flex-col items-center justify-center w-[168px] h-[132px] bg-gray-200 rounded-lg shadow-lg">
      <img className="h-16 w-2/3 object-cover" src={props.image} alt="not found"/>
      <h1 className="text-xl font-bold">{props.type} ¥{props.price}</h1>
      <button className="mr-2 ml-auto mb-2 px-4 mt-auto text-xl text-white bg-red-500 hover:opacity-80 rounded-3xl"
      onClick={() => handleClick()}>カート</button>
    </div>
  );
};

export default ProductDisplay;