import { useEffect, useState } from 'react';
import CardList from '../compoment/CardList';

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllItems();
  }, []);

  return (
    <main>
      <h1>All items</h1>
      {items && <CardList products={items} />}
    </main>
  );
};

export default Home;
