import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./pages/Editor";
import Home from "./pages/Home";


import "./App.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/editor" element={<Editor />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
