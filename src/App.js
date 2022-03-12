import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./layout";
import "./App.css";
const HomePage = lazy(() => import("./pages/HomePage"));
const CoinsPage = lazy(() => import("./pages/CoinsPage"));
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coins/:id" element={<CoinsPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
