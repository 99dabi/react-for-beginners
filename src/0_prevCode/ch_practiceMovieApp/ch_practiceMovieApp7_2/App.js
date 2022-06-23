import { useState, useEffect } from "react";

//https://api.coinpaprika.com/v1/tickers => 코인 정보를 가지고 있는 페이지
//암호회 화폐 페이지
// 페이지 앱 들어왔을 때 로딩 메시지
//코인 나열, 로딩 메시지 숨기고 코인 나열
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  //only run once
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length}) </h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
