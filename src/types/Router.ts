export const RoutesUrl = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
} as const ;

export type RouteUrl = typeof RoutesUrl[keyof typeof RoutesUrl];

export interface Router {
  path: RouteUrl,
  element: React.ReactNode,
}