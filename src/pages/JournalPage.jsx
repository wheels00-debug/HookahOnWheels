import React from 'react';
import PageHeader from '../components/PageHeader';
import Blog from '../components/Blog';

import bgImage from '../assets/pkg_airbnb.png';

export default function JournalPage() {
  return (
    <>
      <PageHeader 
        title="The Shisha Journal" 
        subtitle="Insights, tips, and the latest trends from the world of luxury hookah."
        bgImage={bgImage}
      />
      <Blog />
    </>
  );
}
