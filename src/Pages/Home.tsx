/* import * as jsonData from '../../products.json'; */
import ProductDisplay from '../components/ProductDisplay';
import { useEffect, useState } from 'react';

interface Item {
  price: string;
  type: string;
}

interface CategoryItems {
  [key: string]: Item[];
}

const products: CategoryItems = {
    "food":[
      {"price": "102", "type":"banana"},
      {"price": "138", "type":"apple"},
      {"price": "150", "type":"orange"},
      {"price": "200", "type":"bread"}
  ],
  "drinks":[
      {"price": "200", "type":"coffee"},
      {"price": "195", "type":"tea"},
      {"price": "100", "type":"water"},
      {"price": "250", "type":"juice"},
      {"price": "300", "type":"milk"},
      {"price": "400", "type":"soda"}
  ]
};



const Home = (): JSX.Element => {
  const [flattenedArray, setFlattenedArray] = useState<Item[]>([]);

  useEffect(() => {
    const tempFlattenedArray: Item[] = [];
    for (const category in products) {
      const items = products[category];
      tempFlattenedArray.push(...items);
    }
    setFlattenedArray(tempFlattenedArray);
  }, []);

return (
    <div className="md:px-20 mx-auto">
      <div>
        <div className="mx-auto max-w-[80%] grid grid-cols-3 md:grid-cols-6 gap-16">
          {flattenedArray.map((product, index) => (
            <ProductDisplay key={index} price={product.price} type={product.type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;