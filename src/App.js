import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, Coinspage } from "./components";
import { Navbar } from "./layout";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<Coinspage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
