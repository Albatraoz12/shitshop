import { useEffect, useState } from 'react';

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
    <div>
      <h2>All items</h2>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
};

export default Home;
