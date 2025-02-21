import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Pages/Form.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Joke from "./Pages/Joke.jsx";
import PasswordValidator from "./Pages/PasswordValidator.jsx";
import RoleDice from "./Pages/RoleDice.jsx";
import Practice2 from "./Pages/Practice2/Practice2.jsx";
import Rps from "./Pages/Rps.jsx";
import TodoList from "./Pages/TodoList.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/joke" element={<Joke />} />
      <Route path="/PasswordValidator" element={<PasswordValidator />} />
      <Route path="/RoleDice" element={<RoleDice />} />
      <Route path="/Practice2" element={<Practice2 />} />
      <Route path="/Rps" element={<Rps />} />
      <Route path="/TodoList" element={<TodoList />} />
    </Routes>
  </Router>
);
