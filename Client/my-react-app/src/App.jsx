import { Suspense } from "react";
import "./App.css";

import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading....</div>} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Website />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
