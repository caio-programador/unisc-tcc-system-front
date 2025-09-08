import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/auth";
import { RoutesUrl, type Router } from "./types/Router";
import { Toaster } from "./components/ui/toaster";
import ErrorController from "./pages/error";
import HomeController from "./pages/home";
import LoginController from "./pages/login";
import ProfileController from "./pages/profile";
import RegisterController from "./pages/register";
import TCCDetailsController from "./pages/tcc-details";
import UserDetailsController from "./pages/user-details";
import UserListController from "./pages/user-list";
import TCCListController from "./pages/tcc-list";
import MeetingsController from "./pages/meetings";

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
      path: RoutesUrl.USER_DETAILS,
      element: <UserDetailsController />
    },
    {
      path: RoutesUrl.USER_LIST,
      element: <UserListController />
    },
    {
      path: RoutesUrl.TCC_LIST,
      element: <TCCListController />,
    },
    {
      path: RoutesUrl.MEETINGS,
      element: <MeetingsController />
    },
    {
      path: RoutesUrl.ERROR,
      element: <ErrorController />
    },
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
