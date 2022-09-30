import React from 'react';
import Header from './Components/Header';
import Reviews from './Components/Reviews';
import DataStructure from './Components/DataStructure';
import Footer from './Components/Footer';
import Navbar from '../../Navbar';

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Header />
        <Reviews />
        <DataStructure />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;