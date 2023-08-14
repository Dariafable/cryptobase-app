import React from 'react';
import Coins from '../components/Coins';

const Home = ({ coins }) => {
  return (
    <div>
      <Coins coins={coins} />
    </div>
  );
};

export default Home;
