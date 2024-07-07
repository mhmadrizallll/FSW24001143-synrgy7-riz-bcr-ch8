import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetCars from "./Page/GetCars.tsx";
import HomePage from "./Page/Home.tsx";
import ProtectedRoute from "./dashboard/ProtectedPage.tsx";
import LoginPage from "./dashboard/LoginPage.tsx";
import AdminPage from "./dashboard/AdminPage.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UpdatePage from "./dashboard/UpdatePage.tsx";
import CreatePage from "./dashboard/CreateCar.tsx";
import { ApiProvider } from "./Context/ApiContext.tsx";

const CLIENT_ID =
  "60480331234-8u31ccmifsgmtnfc2podsteg0apeptp5.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/cars" element={<GetCars />} />
                    <Route path="/cars/add" element={<CreatePage />} />
                    <Route path="/cars/:id" element={<UpdatePage />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
