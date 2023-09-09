import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { AppBar, Container, CssBaseline, Toolbar } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ marginRight: 15, textDecoration: "none" }}>
            Dashboard
          </Link>
          <Link
            to="/product"
            style={{ marginRight: 15, textDecoration: "none" }}
          >
            Product
          </Link>
          <Link
            to="/products"
            style={{ marginRight: 15, textDecoration: "none" }}
          >
            Products
          </Link>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
