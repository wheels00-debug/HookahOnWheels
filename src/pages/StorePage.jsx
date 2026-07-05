import React from 'react';
import PageHeader from '../components/PageHeader';
import Products from '../components/Products';

import bgImage from '../assets/hookah_xxx.png';

export default function StorePage() {
  return (
    <>
      <PageHeader 
        title="The Elite Store" 
        subtitle="Purchase premium Foggit hookahs, accessories, and organic supplies for your personal collection."
        bgImage={bgImage}
      />
      <Products />
    </>
  );
}
