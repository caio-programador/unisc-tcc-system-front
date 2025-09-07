export const setCookie = async (name: string, value: string, days?: number) => {
  let cookie = `${name}=${encodeURIComponent(value)}; path=/`;

  if (days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    cookie += `; expires=${expires.toUTCString()}`;
  }

  document.cookie = cookie;
}