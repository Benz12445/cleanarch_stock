import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Container } from "@mui/material";
import Register from "./pages/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container maxWidth="xl">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
