import { useNavigationContext } from '../api/NavigationContext';
import { setCategoryState, selectProducts } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const SideBar = (): JSX.Element => {
  const { isButtonEnabled, toggleButton } = useNavigationContext();
  const categories = [] as string[];
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect (() => {
    console.log(products);
    for(let i = 0; i < products.length; i++){
      if(!categories.includes(products[i].type)){
        categories.push(products[i].type);
      }
    }
    console.log(categories);
  }, [products]);

  const handleCategoryClick = (category: string) => {
    console.log("clicked category button");
    dispatch(setCategoryState(category));
    toggleButton();
  };

  return (
    <>
      {isButtonEnabled === true && (
        <div className="fixed inset-0 bg-black bg-opacity-25">
            <div className="bg-slate-50 pr-4 text-2xl absolute left-0 pt-1 z-10 h-full pl-20
            ">
              <h1 className="mb-10 text-4xl">
                Categories
                <button className="pl-4 text-4xl font-bold hover:opacity-60" onClick={() => toggleButton()}>x</button>
              </h1>
              <li className="[&>*]:mb-4 [&>*]:p-1 [&>*]:border-b-2 [&>*]:w-full [&>*]:text-left
              [&>*]:hover:opacity-70 list-none">
                <button className="hover:bg-zinc-100" onClick={() => handleCategoryClick("abc")}>ABC</button>
                <button className="hover:bg-zinc-100" onClick={() => handleCategoryClick("DEF")}>DEF</button>
                <button className="hover:bg-zinc-100" onClick={() => handleCategoryClick("GHI")}>GHI</button>
              </li>
            </div>
        </div>
      )}
    </>
  );
};

export default SideBar;