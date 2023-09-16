import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import SingleCoinPage from './components/SingleCoinPage/SingleCoinPage';

function App() {
  return (
    // https://api.buyucoin.com/ticker/v1.0/liveData?symbol=USDT-BTC
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/coin/:id" element={<SingleCoinPage/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
