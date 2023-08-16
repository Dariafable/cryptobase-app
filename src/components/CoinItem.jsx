import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
const CoinItem = ({ coin }) => {
  return (
    <tr className='h-[80px] border-b last:border-b-0 overflow-hidden'>
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className='flex items-center'>
            <img src={coin.image} alt={coin.id} className='w-6 mr-2 rounded-full' />
            <p className='hidden md:table-cell'>{coin.name}</p>
          </div>
        </Link>
      </td>
      <td className='font-bold text-left'>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className='text-green-500'>+{coin.price_change_percentage_24h.toFixed(2)}%</p>
        ) : (
          <p className='text-rose-400'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        )}
      </td>
      <td className='w-[180px] hidden sm:table-cell'>${coin.total_volume.toLocaleString()}</td>
      <td className='w-[180px] hidden sm:table-cell'>${coin.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color='teal' />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
