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
    </div>
  );
}

export default App;
