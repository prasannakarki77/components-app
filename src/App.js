import { BrowserRouter } from "react-router-dom";
import "./styles/app.scss";
import Sidenav from "./components/Sidenav";
import Body from "./Body";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidenav />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
