// 사용시 react.useState 사용할 필요 없이 사용 가능
import { useState, useEffect } from "react";

function App() {
  //'Button' is defined but never used  no-unused-vars => 버튼을 사용하지 않아 나는 경고
  const [counter, setValue] = useState(0);
  //prev : 이전 값
  const onClick = () => setValue((prev) => prev + 1);

  console.log("i run all the time");
  /*
  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  };
  useEffect(iRunOnlyOnce, []);
  */
  useEffect(() => {
    console.log("CALL THE API");
  }, []);

  //처음만 코드 실행하고 2번째는 실행하지 않는 코드 생성
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
