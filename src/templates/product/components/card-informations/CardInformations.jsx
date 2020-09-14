import React from 'react';

import Pictures from './components';

const imagesPlaceholder = [
  {
    id: 'Melania-01',
    url: 'https://a0.muscache.com/im/pictures/f64d8539-3301-4d3d-afd5-2bbafde5e520.jpg?im_w=1440',
    alt: 'Big swimming pool',
  },
  {
    id: 'Melania-02',
    url: 'https://a0.muscache.com/im/pictures/ae5a791f-20ed-43f9-a696-87776e73a480.jpg?im_w=1200',
    alt: 'Big saloon',
  },
  {
    id: 'Melania-03',
    url: 'https://a0.muscache.com/im/pictures/5c79d270-0a10-4a8b-8276-760d7bed44f3.jpg?im_w=1440',
    alt: 'Functionnal Kitchen',
  },
  {
    id: 'Melania-04',
    url: 'https://a0.muscache.com/im/pictures/4edc6652-2483-41ab-a8cb-c751e83d0cbf.jpg?im_w=1440',
    alt: 'King size bed',
  },
];

const CardInformations = () => (
  <div className="col-span-8">
    <Pictures images={imagesPlaceholder} />
    <div className="h-screen">Picture Informations</div>
  </div>
);

export default CardInformations;
