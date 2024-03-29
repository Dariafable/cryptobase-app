import React from 'react';
import axios from 'axios';
import { ThemeProvider } from './context/ThemeContext';
import { AuthContextProvider } from './context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import CoinPage from './routes/CoinPage';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';
import Footer from './components/Footer';
import ScrollToTop from './helpers/ScrollToTop';

function App() {
  const [coins, setCoins] = React.useState([]);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=true';

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home coins={coins} />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/account' element={<Account />} />
            <Route path='/coin/:coinId' element={<CoinPage />}>
              <Route path=':coinId' />
            </Route>
          </Routes>
        </ScrollToTop>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
