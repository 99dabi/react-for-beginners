import { useState, useEffect } from "react";

//to-do list
function App() {
  const [toDo, setToDo] = useState("");
  //여러개의 toDolist 만들기
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); //refresh

    if (toDo === "") {
      return;
    }
    setToDo("");
    //함수 는 첫번째 현재 state 가져옴
    //'currentArray => ' == 'function(currentArray)'
    //*****state 는 항상 새로운 것 이어야 함 */
    //배열에 변수를 입력하는 방식이 [변수, 배열] 인경우 새로운 배열을 추가하는 방식
    // => [변수, ...배열] : input + 배열
    setToDos((currentArray) => [toDo, ...currentArray]); //setToDos((["hello"]) => ["bye bye", ...["hello"]]); ==> ["bye bye", "hello"]
    setToDo("");
  };
  //수정 방식 setToDo(""); => 빈값이 stirng이면 string으로 입력이 됨
  //2. 함수 첫번째 함수를 보냄
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do ..."
        />
        {/*버튼이 하나 잇는 경우 submit버튼으로 만들기*/}
        <button>Add To Do</button>
      </form>
      <hr />
      {/*각각의 요소를 변경함 .map() : itme을 원하는 값으로 변경한 후 return 해줌*/}
      <ul>
        {/*array 가져와서 list로 나타냄*/}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {/*react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop. => 오류 발생 list의 prop을 인식해 주기 때문임 */}
      </ul>
    </div>
  );
}

export default App;
