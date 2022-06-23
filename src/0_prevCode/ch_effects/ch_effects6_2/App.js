// 사용시 react.useState 사용할 필요 없이 사용 가능
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  //빈값일때는 변화하는게 없어서 한번만 실행됨
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  //keyword가 변화할 때만 실행됨
  useEffect(() => {
    //if (keyword !== "" && keyword.length > 5)
    console.log("I run when 'keyword' changes : ", keyword);
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes : ", counter);
  }, [counter]);

  useEffect(() => {
    console.log("I run when keword & counter change");
  }, [keyword, counter]);

  //처음만 코드 실행하고 2번째는 실행하지 않는 코드 생성
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search hear..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
