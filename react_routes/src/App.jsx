import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Landing />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing page
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard page
        </button>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <>
      <h2>Loading...</h2>
    </>
  );
}

export default App;
