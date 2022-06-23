import { useState, useEffect } from "react";

//hello로 작성되있는 title을 return 시킴
//return 구문에 작성시 component가 destroy 될때 실행하는 코드 : cleanup function
/*
//함수 생성시, 파괴시 실행할 구문 방식1
function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}
*/

//생성하는 실행 함수에 return 값을 주면 해당 값은 반환시 실행 됨
/*
function Hello() {
  function hiFn() {
    console.log("create :)");
    return byFn;
  }
  function byFn() {
    console.log("bye :(");
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}
*/
function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  return <h1>Hello</h1>;
}

//react.js => component가 destroy 될때도 코드 실행 가능
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {/* {} : 자바스크립트 사용시 필수 */}

      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
