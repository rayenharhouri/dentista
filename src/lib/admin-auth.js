export const ADMIN_SESSION_COOKIE = "saffi_admin_session";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "saffi@dental.it";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "saffi@123";
const ADMIN_SESSION_TOKEN =
  process.env.ADMIN_SESSION_TOKEN || "saffi_admin_authenticated";

export const validateAdminCredentials = (email, password) => {
  return (
    String(email || "").trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
    String(password || "") === ADMIN_PASSWORD
  );
};

export const getAdminSessionToken = () => ADMIN_SESSION_TOKEN;

export const isAdminAuthenticated = (sessionValue) => {
  return String(sessionValue || "") === ADMIN_SESSION_TOKEN;
};
