import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/auth";
import { RoutesUrl, type Router } from "./types/Router";
import HomeController from "./pages/home/controller/home.controller";
import LoginController from "./pages/login/controller/login.controller";
import RegisterController from "./pages/register/controller/register.controller";
import ProfileController from "./pages/profile/controller/profile.controller";
import { Toaster } from "./components/ui/toaster";
import TCCDetailsController from "./pages/tcc-details/controller/tcc-details.controller";
import ErrorController from "./pages/error";

export const AppRouterProvider = () => {
  const routes: Router[] = [
    {
      path: RoutesUrl.HOME,
      element: <HomeController />
    },
    {
      path: RoutesUrl.LOGIN,
      element: <LoginController />
    },
    {
      path: RoutesUrl.REGISTER,
      element: <RegisterController />
    },
    {
      path: RoutesUrl.PROFILE,
      element: <ProfileController />
    },
    {
      path: RoutesUrl.TCC_DETAILS,
      element: <TCCDetailsController />
    },
    {
      path: RoutesUrl.ERROR,
      element: <ErrorController />
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
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  )
};
