import React from 'react'
import Featured from '../../components/Featured';
import Delivery from '../../components/Delivery';
import TopPicks from '../../components/TopPicks';
import Food from '../../components/Food';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <TopPicks />
      <Featured />
      <Food />
      <Delivery />
      <Footer />
    </div>
  )
}

export default Home