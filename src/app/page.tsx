'use client';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Instagram from './components/Instagram';
import LineQR from './components/LineQR';
import Principles from './components/Principles';
import Fork from './components/Fork';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Modules />
        <Instagram />
        <LineQR />
        <Principles />
        <Fork />
      </main>
      <Footer />
    </>
  );
}