import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Container } from "@mui/material";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductForm from "./pages/ProductForm";
import { AppProvider } from "./context/AppContext";
import { routes } from "./constants/route";

function App() {
  const [count, setCount] = useState(0);
  // id
  // uid
  // name
  // qty
  // price
  return (
    <AppProvider>
      <Container maxWidth="xl" sx={{ height: "100vh", margin: 0, padding: 0 }}>
        <BrowserRouter>
          <Routes>
            <Route path={routes.HOME.path} element={<Home />} />
            <Route path={routes.PRODUCT.path} element={<ProductForm />} />
            <Route path={routes.LOGIN.path} element={<Login />} />
            <Route path={routes.REGISTER.path} element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </AppProvider>
  );
}

export default App;
