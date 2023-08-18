import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { FaHome, FaReddit } from 'react-icons/fa';
import DOMPurify from 'dompurify';

const CoinPage = () => {
  const [coin, setCoin] = React.useState([]);
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  return (
    <div className='my-12 py-8 rounded-div'>
      <div className='py-8 flex items-center'>
        <img className='w-20 mr-8' src={coin.image?.large} alt='' />
        <div>
          <p className='text-3xl font-bold'>{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <div className='flex justify-between'>
            {coin.market_data?.current_price ? (
              <p className='text-3xl font-bold'>
                ${coin.market_data.current_price.usd.toLocaleString()}
              </p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color='teal' />
            </Sparklines>
          </div>

          <div className='py-4 flex justify-between'>
            <div>
              <p className='text-gray-500 text-sm'>Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm text-right'>Volume (24h)</p>
              {coin.market_data?.total_volume ? (
                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>

          <div className='py-4 flex justify-between'>
            <div>
              <p className='text-gray-500 text-sm'>24h High</p>
              {coin.market_data?.high_24h ? (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm text-right'>24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <p className='text-xl font-bold'>Market Stats</p>
          <div className='py-4 flex justify-between gap-2'>
            <div>
              <p className='text-gray-500 text-sm'>Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className='text-gray-500 text-sm text-center'>Hashing Algorithm</p>
              {coin.hashing_algorithm ? (
                <p className='text-center'>{coin.hashing_algorithm}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Trust Score</p>
              {coin.liquidity_score ? (
                <p className='text-right'>{coin.liquidity_score.toFixed(2)}</p>
              ) : null}
            </div>
          </div>

          <div className='py-4 flex justify-between gap-2'>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (24h)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm text-center'>Price Change (7d)</p>
              {coin.market_data ? (
                <p className='text-center'>
                  {coin.market_data.price_change_percentage_7d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (14d)</p>
              {coin.market_data ? (
                <p className='text-right'>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>

          <div className='py-4 flex justify-between gap-2'>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (30d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm text-center'>Price Change (60d)</p>
              {coin.market_data ? (
                <p className='text-center'>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (1y)</p>
              {coin.market_data ? (
                <p className='text-right'>
                  {coin.market_data.price_change_percentage_1y.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>
          <div className='py-8 flex justify-center gap-8 text-accent'>
            <a href={coin.links?.homepage[0]}>
              <FaHome />
            </a>
            <a href={coin.links?.subreddit_url}>
              <FaReddit />
            </a>
          </div>
        </div>
      </div>

      <div className='py-4'>
        <p className='text-xl font-bold'>About {coin.name}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
          }}
        ></p>
      </div>
    </div>
  );
};

export default CoinPage;
