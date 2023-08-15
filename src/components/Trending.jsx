import React from 'react';
import axios from 'axios';

const Trending = () => {
  const [trending, setTrending] = React.useState([]);

  const url = 'https://api.coingecko.com/api/v3/search/trending';

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
      console.log(response.data.coins);
    });
  }, [url]);

  return (
    <div className='my-12 py-8 rounded-div'>
      <h1 className='py-4 font-bold text-2xl'>Trending Coins</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {trending.map((coin) => (
          <div
            key={coin.item.coin_id}
            className='p-4 rounded-div hover:scale-105 ease-in duration-300'
          >
            <div className='w-full flex justify-between items-center'>
              <div className='flex items-center'>
                <img className='mr-4 rounded-full' src={coin.item.small} alt='/' />
                <div>
                  <p className='font-bold hidden md:block'>{coin.item.name}</p>
                  <p className='font-bold md:font-normal'>{coin.item.symbol}</p>
                </div>
              </div>
              <div className='flex items-center'>
                <img
                  className='w-4 mr-2'
                  src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                  alt='/'
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
