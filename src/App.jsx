import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Taskpages from "./pages/Taskpages.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { useEffect, useState } from "react";
import { auth } from "..//firebaseConfig.js";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Se já estiver logado, não mostra o login — redireciona para /home */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />

        {/* Rota protegida: só mostra se estiver logado */}
        <Route
          path="/home"
          element={user ? <Dashboard user={user} /> : <Navigate to="/" />}
        />

        {/* Outra rota protegida */}
        <Route
          path="/tasks"
          element={user ? <Taskpages /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
