interface ComponentProps {
  price: string,
  type: string,
}

const ProductDisplay = (props: ComponentProps): JSX.Element => {
  return(
    <div className="flex flex-col items-center justify-center w-40 h-32 bg-gray-200 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold">{props.type} ¥{props.price}</h1>
      <button className="mr-2 ml-auto mb-2 px-4 mt-auto text-xl text-white bg-red-500 hover:opacity-80 rounded-3xl">カート</button>
    </div>
  );
};

export default ProductDisplay;