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
      <footer class="footer">
        created by
        <a href="https://devchallenges.io/portfolio/prasannakarki77">
          prasannakarki77
        </a>
        - devChallenges.io
      </footer>
    </BrowserRouter>
  );
}

export default App;
