import React from 'react';
import { Productcard } from './productCard/productCard';
import './product-grid.css'
export default function ProductGrid() {
  // Define the number of columns based on screen size
  const numColumns = window.innerWidth >= 768 ? 3 : 2; // 768px is the Bootstrap `sm` breakpoint

  // Create an array of products (you can replace this with your actual product data)
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' },
    // Add more products as needed
  ];

  // Function to create a row of columns
  const createRow = (start, end) => {
    return (
      <div className="row" key={`row-${start}-${end}`}>
        {products.slice(start, end).map((product) => (
          <div className={`col-${12 / numColumns}`} key={product.id}>
            <Productcard />
          </div>
        ))}
      </div>
    );
  };

  // Calculate the number of rows needed
  const numRows = Math.ceil(products.length / numColumns);

  // Create an array to store the rows
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const start = i * numColumns;
    const end = start + numColumns;
    rows.push(createRow(start, end));
  }

  return (
    <div className="container">
      {/* Display 3 columns for larger screens (PCs and tablets) */}
      {window.innerWidth >= 768 && (
        <div className="row">
          {products.map((product) => (
            <div className="col-6 col-sm-4" key={product.id}>
              <Productcard />
            </div>
          ))}
        </div>
      )}

      {/* Display 2 columns for small screens (mobile) */}
      {window.innerWidth < 768 && (
        <div className="row">
          {products.map((product) => (
            <div className="col-6 col-sm-4" key={product.id}>
              <Productcard />
            </div>
          ))}
        </div>
      )}

      <div className="mt-5" style={{ display: "flex", justifyContent: "center",display:'none' }}>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
