import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./roures/Home";
import Detail from "./roures/Detail";

//BrowserRouter : localhost:3000
//HashRouter : localhost:3000/#/

{
  /*router = url    를 찾는 역활 */
}
{
  /* path의 url은 밑에 내용을 보여줄꺼야 */
}
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          {/*다이나믹 url 지원
          변수 앞에 : 사용*/}
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
