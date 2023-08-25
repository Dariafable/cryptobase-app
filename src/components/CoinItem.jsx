import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc, onSnapshot } from 'firebase/firestore';

const CoinItem = ({ coin }) => {
  const [savedCoin, setSavedCoin] = React.useState(false);
  const { user } = UserAuth();

  const coinPath = doc(db, 'users', `${user?.email}`);
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
          saved: true,
        }),
      });
    } else {
      alert('Please sign in to save a coin to your watch list');
    }
  };

  return (
    <tr className='h-[80px] border-b last:border-b-0 overflow-hidden'>
      <td onClick={saveCoin}>
        {savedCoin ? (
          <AiFillStar className='cursor-pointer' />
        ) : (
          <AiOutlineStar className='cursor-pointer' />
        )}
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
