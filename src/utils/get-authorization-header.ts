const TOKEN_COOKIE_NAME = import.meta.env.VITE_COOKIE_KEY;

export const getAuthorizationHeader = async () => {
  const cookieToken = await window.cookieStore.get(TOKEN_COOKIE_NAME);
  return {
    Authorization: `Bearer ${cookieToken?.value}`,
  };
};
