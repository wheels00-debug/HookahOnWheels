import React from 'react';
import Hero from '../components/Hero';
import InstagramFeed from '../components/InstagramFeed';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <InstagramFeed />
      <Newsletter />
    </>
  );
}
