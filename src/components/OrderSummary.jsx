import React from 'react';
import { Link } from 'react-router-dom';

function OrderSummary({ items }) {
  return (
    <div className="order-summary">
      {items.map(item => (
        <Link
          to={`/product/${item.id}`}
          key={item.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="order-summary-item" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <div>
              <div className="order-summary-item-name" style={{ fontWeight: 'bold' }}>{item.name}</div>
              <div className="order-summary-item-price" style={{ color: '#888' }}>${item.price.toFixed(2)}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default OrderSummary;