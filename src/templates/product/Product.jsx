import React from 'react';

import { CardInformation, CardBuy, Banner } from './components';

import productMockData from './productMockData.json';

const Product = () => (
  <div className="container">
    <Banner banner={productMockData.banner} />
    <div className="grid grid-cols-12 col-gap-5 pt-12">
      <CardInformation
        features={productMockData.features}
        description={productMockData.description}
        images={productMockData.pictures}
        location={productMockData.location}
      />
      <CardBuy
        name={productMockData.name}
        type={productMockData.type}
        rate={productMockData.rate}
        price={productMockData.price}
        specifications={productMockData.specifications}
      />
    </div>
    <div className="h-64">Similar products</div>
    <div className="h-64">CTA</div>
    <div className="h-64">FOOTEr</div>
  </div>
);

export default Product;
