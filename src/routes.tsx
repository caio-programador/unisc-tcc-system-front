import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/auth";
import { RoutesUrl, type Router } from "./types/Router";
import LoginController from "./pages/login/controller/login.controller";
import RegisterController from "./pages/register/controller/register.controller";

export const AppRouterProvider = () => {
  const routes: Router[] = [
    {
      path: RoutesUrl.HOME,
      element: <a href="/login"></a>
    },
    {
      path: RoutesUrl.LOGIN,
      element: <LoginController />
    },
    {
      path: RoutesUrl.REGISTER,
      element: <RegisterController />
    }
  ]
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
};
