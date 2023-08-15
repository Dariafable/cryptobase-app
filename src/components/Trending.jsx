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
  return <div>Trending</div>;
};

export default Trending;
