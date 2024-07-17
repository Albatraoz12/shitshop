import { useEffect, useState } from 'react';
import CardList from '../components/CardList';

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
      <section className='home-page'>
        <h1>Shitstore</h1>

        <p>
          Your shopping journey begins here! Browse our offers and get inspired.
          😊🛒
        </p>
      </section>
      {items && <CardList products={items} />}
    </main>
  );
};

export default Home;
