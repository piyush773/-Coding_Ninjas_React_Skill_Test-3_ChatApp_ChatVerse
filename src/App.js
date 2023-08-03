import { Home, SignIn, SignUp,Profile, NotFound } from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/Styles/style.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";


function App() {
  // current user details through useContext
  const { currentUser } = useContext(AuthContext);

  // protected route for not logged users 
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };
  return (
    <div className="App">
      <BrowserRouter basename="/my-chat-app">
        <ToastContainer/>
        <Routes>
          <Route exact path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
