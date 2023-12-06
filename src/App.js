import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import sapatoImage from "./components/Imagem/sapatos.jpeg"; 

const App = () => {
  const headerStyle = {
    padding: "90px",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    backgroundImage: `url(${sapatoImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const footerStyle = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: "20px",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
  };

  return (
    <AuthProvider>
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <header style={headerStyle}>
          <h1>OLShoes, a sua loja de tênis favorita.</h1>
        </header>
        <RoutesApp />
        <footer style={footerStyle}>
          <p>Bem-Vindo a maior loja de tênis do Brasil!</p>
        </footer>
      </div>
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
