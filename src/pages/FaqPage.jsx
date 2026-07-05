import React from 'react';
import PageHeader from '../components/PageHeader';
import Faqs from '../components/Faqs';

import bgImage from '../assets/poster.jpg';

export default function FaqPage() {
  return (
    <>
      <PageHeader 
        title="FAQ" 
        subtitle="Frequently Asked Questions about our delivery, setup, and sanitization processes."
        bgImage={bgImage}
      />
      <Faqs />
    </>
  );
}
