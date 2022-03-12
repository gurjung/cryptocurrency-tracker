import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Homepage} from "./components";
import { Navbar } from "./layout";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
