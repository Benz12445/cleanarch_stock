import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Container } from "@mui/material";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductForm from "./pages/ProductForm";
import { AppProvider } from "./context/AppContext";
import { routes } from "./constants/route";

function App() {
  return (
    <AppProvider>
      <Container
        sx={{
          height: "100vh",
          maxWidth: "100vw !important",
          margin: "0 !important",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          justifyContent: "center",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path={routes.HOME.path} element={<Home />} />
            <Route path={routes.PRODUCT.path} element={<ProductForm />} />
            <Route path={routes.EDITPRODUCT.path} element={<ProductForm />} />
            <Route path={routes.LOGIN.path} element={<Login />} />
            <Route path={routes.REGISTER.path} element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </AppProvider>
  );
}

export default App;
