import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const SavedCoin = () => {
  const [coins, setCoins] = React.useState([]);

  return (
    <div>
      {coins?.length === 0 ? (
        <p>
          You don't have any coins saved. Please save a coin to add it to your watch list.{' '}
          <Link to='/' className='text-accent'>
            Click here to search coins.
          </Link>
        </p>
      ) : (
        <table className='w-full border-collapse'>
          <thead>
            <tr className='border-b'>
              <th className='px-4'>Rank #</th>
              <th className='text-left'>Coin</th>
              <th className='text-left'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr key={coin.id} className='h-[60px] overflow-hidden'>
                <td className='text-center'>{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className='flex items-center'>
                      <img className='mr-4 w-8' src={coin?.image} alt='' />
                      <div>
                        <p className='hidden sm:table-cell'>{coin?.name}</p>
                        <p className='text-gray-500 text-sm text-left'>
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className='pl-6'>
                  <AiOutlineClose className='cursor-pointer' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
