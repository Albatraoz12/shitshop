import Card from './Card';

/* eslint-disable react/prop-types */
const CardList = ({ products }) => {
  console.log(products);
  return (
    <div className='products-list-container'>
      {products &&
        products.length > 0 &&
        products.map((product) => <Card key={product.id} product={product} />)}
    </div>
  );
};

export default CardList;
