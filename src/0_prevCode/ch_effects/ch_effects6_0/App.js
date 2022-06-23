// 사용시 react.useState 사용할 필요 없이 사용 가능
import { useState } from "react";

function App() {
  //'Button' is defined but never used  no-unused-vars => 버튼을 사용하지 않아 나는 경고
  const [counter, setValue] = useState(0);
  //prev : 이전 값
  const onClick = () => setValue((prev) => prev + 1);
  console.log("call an api");

  //원하는 시기에만 re-render 될 수 있게 만들기
  //기본 : state 변경하는 경우 모든 code가 변경됨
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
