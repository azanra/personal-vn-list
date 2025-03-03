import { vnList } from "./model/data";
import List from "./list";
import "./style/style.css";

function App() {
  let displayList = vnList.map((item, index) => {
    return <List key={index} list={item} />;
  });

  return <div className="bg-[#071c30] text-white">{displayList}</div>;
}

export default App;
