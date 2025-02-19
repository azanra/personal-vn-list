import "./App.css";
import { vnList } from "./model/data";
import List from "./list";

function App() {
  let displayList = vnList.map((item, index) => {
    return <List key={index} props={item} />;
  });

  return <>{displayList}</>;
}

export default App;
