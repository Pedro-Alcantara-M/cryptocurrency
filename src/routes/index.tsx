import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const LandingPage = lazy(() => import("@views/main"));
const DashboardView = lazy(() => import("@views/dashboard"));


const Router = () => {
  const PrivateRoute = ({ children }: any) => {
    const isLogged = localStorage.getItem("isLogged");
console.log(isLogged)
    return isLogged ? children : <Navigate to={"/"} />;
  };
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Suspense fallback={<h1>...CARREGANDO</h1>}>
              <DashboardView />
            </Suspense>
          </PrivateRoute>
        }
      >
         <Route index element={<Navigate to='/dashboard' />} />
      </Route>
    </Routes>
  );
};

export default Router
