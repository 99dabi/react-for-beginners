import { useState, useEffect } from "react";

//https://api.coinpaprika.com/v1/tickers => 코인 정보를 가지고 있는 페이지
//암호회 화폐 페이지
// 페이지 앱 들어왔을 때 로딩 메시지
//코인 나열, 로딩 메시지 숨기고 코인 나열
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  //변경할 값을 저장해 둔 변수
  const [price, setPrice] = useState(0);

  const [typeCoin, setTypeCoin] = useState(false);

  //onChange 함수 => select box 값 변경 하는 경우 사용
  const onChange = (event) => {
    setPrice(event.target.value);
    if (event.target.value !== "xx") {
      setTypeCoin(true);
    } else {
      setTypeCoin(false);
    }
  };

  function ConvertMoney() {
    //작성한돈
    const [amount, setAmount] = useState(0);
    //작성단위 변경한 변수
    const [inverted, setInverted] = useState(false);

    const onChange = (event) => {
      setAmount(event.target.value);
      console.log(event.target.value);
    };
    const reset = () => setAmount(0);
    const onFlip = () => {
      reset();
      setInverted((current) => !current);
    };
    return (
      <div>
        <h3>Coin 2 Money : {price}</h3>
        {typeCoin ? (
          <div>
            <div>
              <label htmlFor="coin">Coin</label>
              <input
                value={inverted ? amount * price : amount}
                id="coin"
                placeholder="Coin"
                type="number"
                onChange={onChange}
                disabled={inverted === true}
              />
            </div>
            <div>
              <label htmlFor="money">Money</label>
              {/*disabled : 명시적으로 사용 가능
                            ex) disabled = {true}
                                disabled = {false}

                            현재 flip으로 변환시 hours값은 변화 불가능 => 변경
                        */}
              <input
                value={
                  inverted
                    ? amount
                    : Math.round(amount / price) > 0
                    ? Math.round(amount / price)
                    : 0
                }
                id="money"
                placeholder="Money"
                type="number"
                onChange={onChange}
                disabled={inverted === false}
              />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>
              {inverted ? "Turn back" : "Invert"}
            </button>
          </div>
        ) : null}
      </div>
    );
  }

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
      <div>
        <h1>The Coins! ({coins.length}) </h1>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select onChange={onChange}>
            <option>Choice Coin !</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
      </div>
      <hr />

      <div>
        <ConvertMoney />
      </div>
    </div>
  );
}

export default App;
