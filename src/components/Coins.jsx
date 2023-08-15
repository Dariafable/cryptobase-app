import React from 'react';

import CoinItem from './CoinItem';

const Coins = ({ coins }) => {
  const [searchText, setSearchText] = React.useState('');

  return (
    <div className='my-4 rounded-div'>
      <div className='pt-4 pb-6 flex flex-col md:flex-row justify-between text-center md:text-right'>
        <h1 className=' my-2 text-2xl font-bold'>Search Crypto</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type='text'
            placeholder='Search a coin'
            className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl'
          />
        </form>
      </div>

      <table className='w-full border-collapse text-center'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24h Volume</th>
            <th className='hidden sm:table-cell'>Mkt</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchText === '') {
                return value;
              } else if (value.name.toLowerCase().includes(searchText.toLowerCase())) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.last_updated} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coins;
