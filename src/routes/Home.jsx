import React from 'react';
import Coins from '../components/Coins';
import Trending from '../components/Trending';

const Home = ({ coins }) => {
  return (
    <div>
      <Coins coins={coins} />
      <Trending />
    </div>
  );
};

export default Home;
