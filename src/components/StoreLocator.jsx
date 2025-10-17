import React from 'react';
import './StoreLocator.css';

const StoreLocator = () => {
  const stores = [
    {
      name: "New York Flagship",
      address: "123 Luxury Avenue, New York, NY 10001",
      hours: "Mon-Sat 10am-7pm, Sun 12pm-6pm",
      contact: "(212) 555-0123"
    },
    {
      name: "Beverly Hills Boutique",
      address: "456 Rodeo Drive, Beverly Hills, CA 90210",
      hours: "Mon-Sat 11am-8pm, Sun 12pm-5pm",
      contact: "(310) 555-0456"
    },
    {
      name: "Miami Design District",
      address: "789 Art Walk, Miami, FL 33137",
      hours: "Mon-Sat 10am-7pm, Sun 12pm-6pm",
      contact: "(305) 555-0189"
    }
  ];

  return (
    <div className="store-locator">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>Store Locator</h1>
          <p className="subtitle">Find an Alberto Watch Company store near you.</p>
        </div>

        {/* Store List */}
        <div className="store-list">
          {stores.map((store, index) => (
            <div 
              key={index}
              className="store-card"
            >
              <h3>{store.name}</h3>
              <p className="address">{store.address}</p>
              <div className="store-details">
                <p>
                  <span className="label">Hours:</span>{' '}
                  <span className="value">{store.hours}</span>
                </p>
                <p>
                  <span className="label">Contact:</span>{' '}
                  <span className="value">{store.contact}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;