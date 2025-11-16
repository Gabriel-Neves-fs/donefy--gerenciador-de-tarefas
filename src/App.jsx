import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Taskpages from "./pages/Taskpages.jsx";
import Dashboard from "./pages/Dashboard.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/tasks" element={<Taskpages />} />

        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
