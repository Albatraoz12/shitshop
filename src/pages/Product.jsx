import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      return data;
    };
    fetchProduct();
  }, [id]);

  return (
    <section className='product-container'>
      {product && (
        <>
          <div className='product-image'>
            <figure>
              <img src={product.image} alt={product.category} />
            </figure>
          </div>

          <div className='product-desc'>
            <h2>{product.title}</h2>
            <button>Add to cart!</button>
            <p>{product.description}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Product;
