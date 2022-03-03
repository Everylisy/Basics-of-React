import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);   //현재 나의 돈
  const [cost, setCost] = useState(0);   //비트코인 가격
  
  
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
    setCoins(json)
    setLoading(false);
  });
  }, [])

  const handleCost = (event) => {   //코인이 선택 될 경우 동작하는 함수
    setCost(event.target.value);
    setSelect(false);
  }

  const handleMoney = (event) => {  //내 돈 입력값을 처리하는 함수
    setMoney(event.target.value);
  }


  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? <h2>Loading ...</h2> : 
      <select onChange={handleCost}> 
      <option>코인을 선택하세요.</option> 
      {coins.map((coin, index) => 
        <option key={index} value={coin.quotes.USD.price}>
          {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
        </option>
        )}
      </select>} <br/>
      <input value={money} onChange={handleMoney} type="number" placeholder='돈을 입력하세요'></input>
      <span>My Money : {money}</span> <br />
      <h2> {select ? null : `코인을 ${Math.floor(money/cost)} 개 구입할 수 있습니다.`}</h2>
    </div>
  );
}

export default App;
