import React from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import Rentals from '../components/Rentals';
import EventPackages from '../components/EventPackages';

// Using one of the package images for the header background
import bgImage from '../assets/pkg_wedding.png';

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Exclusive Hookah catering, bespoke rentals, and on-demand sommelier setups for discerning clients."
        bgImage={bgImage}
      />
      <Services />
      <Rentals />
      <EventPackages />
    </>
  );
}
