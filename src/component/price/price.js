import React from 'react';
import { PriceCard } from './pricecard/pricecard';

export default function Price() {
  return (

    <>
    <div style={{ marginTop: "100px" }} />
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <PriceCard  text="Iconic" cardColor="var(--jet-black)" pricetext="₹999" dummytext="₹1449" pagetext="12"/>
        </div>
        <div className="col-md-4">
          <PriceCard text="Idyllic" cardColor="var(--isabeline)" pricetext="₹1849" dummytext="₹1999" pagetext="16"/>
        </div>
        <div className="col-md-4">
          <PriceCard text="Impression" cardColor="var(--isabeline)" pricetext="₹2299" dummytext="₹2999" pagetext="20"/>
        </div>
      </div>
    </div>
    </>
  );
}
