import Link from "next/link";
import Router, { useRouter } from "next/router";

/**
 * @swagger
 * NavBar:
 *   post:
 *     description: Creates a navbar for all users to see.
 *     summary: Creates a navbar for all users to see.
 */
export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-xxl bg-light py-2 px-4">
      <div className="container-fluid">
        <a className="navbar-brand fs-3" href="#">
          Navbar
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
              <a className="nav-link active fs-5" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fs-5" href="/diagnosis">
                Diagnosis
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fs-5" href="/calendar">
                Calendar
              </a>
            </li>
          </ul>
          <a className="btn btn-outline-dark fs-5" href="/login">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
