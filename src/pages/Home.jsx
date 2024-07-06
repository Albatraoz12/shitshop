import { useEffect, useState } from 'react';
import Card from '../compoment/Card';

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllItems();
  }, []);

  return (
    <main>
      <h1>All items</h1>
      <Card />
    </main>
  );
};

export default Home;
