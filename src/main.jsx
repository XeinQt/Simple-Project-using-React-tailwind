import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Pages/Form.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Joke from "./Pages/Joke.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/joke" element={<Joke />} />
    </Routes>
  </Router>
);
