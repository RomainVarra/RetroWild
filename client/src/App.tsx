import { Outlet } from "react-router-dom";
import "./App.css";
import { Bounce, ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar/NavBar";
import AuthProvider from "./contexts/AuthContext";
import Footer from "./pages/ClientPages/Footer/Footer";

function App() {
  return (
    <>
      <AuthProvider>
        <header>
          <NavBar />
        </header>
        <main>
          <Outlet />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </AuthProvider>
    </>
  );
}
export default App;
