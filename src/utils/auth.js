export const isLoggedIn = () => {
  return document.cookie.includes("isLogin=true");
};

export const getRole = () => {
  const cookies = document.cookie;

  if (cookies.includes("role=admin")) return "admin";
  if (cookies.includes("role=user")) return "user";

  return null;
};

export const logout = () => {
  document.cookie = "isLogin=; max-age=0; path=/";
  document.cookie = "role=; max-age=0; path=/";
};
