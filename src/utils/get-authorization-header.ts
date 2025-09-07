import { getCookie } from "./get-cookie";

const TOKEN_COOKIE_NAME = import.meta.env.VITE_COOKIE_KEY;

export const getAuthorizationHeader = async () => {
  const cookieToken = await getCookie(TOKEN_COOKIE_NAME);
  return {
    Authorization: `Bearer ${cookieToken}`,
  };
};
