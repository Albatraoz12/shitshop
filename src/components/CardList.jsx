import { useState } from 'react';
import Card from './Card';

/* eslint-disable react/prop-types */
const CardList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Calculate the products to be displayed on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products.length);

  const currentProducts = products.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className='products-list-container'>
        {currentProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div className='pagination'>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={currentPage === page}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default CardList;
