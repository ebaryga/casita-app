import React from 'react';

import { CardInformation, CardBuy } from './components';

const Product = () => (
  <div className="container">
    <div className="grid grid-cols-12 col-gap-5">
      <CardInformation />
      <CardBuy />
    </div>
    <div className="h-screen">passing sticky</div>
  </div>
);

export default Product;
