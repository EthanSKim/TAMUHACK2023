import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const USER_KEY = "@user";

/**
 * @swagger
 * NavBar:
 *   post:
 *     description: Creates a navbar for all users to see.
 *     summary: Creates a navbar for all users to see.
 */
export default function NavBar() {
  const router = useRouter();

  const [user, setUser] = useState(false);
  const userOut = () => {
    localStorage.clear();
    setUser(false);
    router.push("/");
  };
  const loadUser = () => {
    const user = localStorage.getItem(USER_KEY);
    if (user !== null) {
      setUser(true);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <nav className="navbar navbar-expand-xxl bg-light py-2 px-4 fs-4">
      <div className="container-fluid">
        <a className="navbar-brand fs-2 fw-semibold" href="/">
          PillPal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
            <li className="nav-item">
              <a
                className={
                  router.pathname === "/" ? "nav-link active" : "nav-link"
                }
                href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  router.pathname === "/diagnosis"
                    ? "nav-link active"
                    : "nav-link"
                }
                href={user ? "/diagnosis" : "/login"}>
                Diagnosis
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  router.pathname === "/calendar"
                    ? "nav-link active"
                    : "nav-link"
                }
                href={user ? "/calendar" : "/login"}>
                Calendar
              </a>
            </li>
          </ul>
          {user ? (
            <button className="btn btn-outline-dark fs-5" onClick={userOut}>
              Logout
            </button>
          ) : router.pathname === "/login" ? (
            ""
          ) : (
            <a className="btn btn-outline-dark fs-5" href="/login">
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
