import Button from "./Button";
import styles from "./App.module.css";

function App() {
  //'Button' is defined but never used  no-unused-vars => 버튼을 사용하지 않아 나는 경고
  const [counter, setValue] = useState(0);
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
