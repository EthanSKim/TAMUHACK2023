import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const USER_KEY = "@user";

export default function login() {
  const router = useRouter();
  const [user, setUser] = useState("guest");
  const userLogin = (e) => {
    setUser(document.getElementById("floatingInput").value);
    localStorage.setItem(
      USER_KEY,
      document.getElementById("floatingInput").value
    );
  };

  const loadUser = () => {
    const user = localStorage.getItem(USER_KEY);
    if (user !== null) {
      router.push("/");
    }
  };

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="w-25 mx-auto" style={{ marginTop: "10em" }}>
      <main className="form-signin w-100 m-auto text-center">
        <form onSubmit={userLogin}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"></input>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"></input>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="mb-3 d-flex justify-content-center align-items-center">
            <div className="checkbox">
              <label className="">
                <input type="checkbox" value="remember-me"></input> Remember me
              </label>
            </div>
            <a className="btn btn-link fs-5 px-4" href="/signup">
              Create an Account
            </a>
          </div>
          <button className="btn btn-lg btn-primary px-4" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
