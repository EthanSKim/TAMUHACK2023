export default function signup() {
  return (
    <div className="w-25 mx-auto" style={{ marginTop: "10em" }}>
      <main className="form-signin w-100 m-auto text-center">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please create an account</h1>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"></input>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"></input>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"></input>
            <label for="floatingPassword">Confirm Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"></input> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary px-4" type="submit">
            Sign up
          </button>
        </form>
      </main>
    </div>
  );
}
