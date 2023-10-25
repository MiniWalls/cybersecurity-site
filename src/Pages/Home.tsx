/* import * as jsonData from '../../products.json'; */
import ProductDisplay from '../components/ProductDisplay';
import { useEffect, useState } from 'react';
import getImageList from '../components/images/imageUtil';
import { useSelector, useDispatch } from 'react-redux';
import { addCategory, selectCategory, selectState } from '../store/store';
import axios from 'axios';

interface Item {
  name: string
  price: number;
  category: string;
}


const Home = (): JSX.Element => {
  const images = getImageList();
  const appStates = useSelector(selectState);
  const [products, SetProducts] = useState<Item[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Item[]>([]);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);

  useEffect(() => {
    axios.get<Item[]>("http://localhost:3001/products")
    .then((response) => {
      SetProducts(response.data);
      setSelectedProducts(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    if(appStates.categoryState === ""){
      setSelectedProducts(products);
    } else {
      setSelectedProducts(products.filter(product => product.category === appStates.categoryState));
    }
  }, [appStates.categoryState]);

  useEffect(() => {
    const tempCategories: string[] = [];
    for (let i = 0; i < products.length; i++) {
      if(!tempCategories.includes(products[i].category)){
        if(!categories.includes(products[i].category)){
          tempCategories.push(products[i].category);
          dispatch(addCategory(products[i].category));
        }
      }
    }
    }, [products]);

return (
    <div className="md:px-20 mx-auto">
      <div>
        <p>{appStates.categoryState}</p>
        <div className="mx-auto lg:max-w-[80%] grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-4 2xl:gap-16">
          {selectedProducts?.map((product, index) => (
            <ProductDisplay key={index} price={product.price} name={product.name} image={images[product.name]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;