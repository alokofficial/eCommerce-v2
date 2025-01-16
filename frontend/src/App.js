import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logout } from "./slices/authSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const expirationTime = localStorage.getItem("expirationTime");
    if(expirationTime){
      const currentTime = new Date().getTime();
      if(currentTime >= expirationTime){
        dispatch(logout());
      }
    }
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container> 
      </main>
      <Footer />
    </>
  );
}
export default App;
