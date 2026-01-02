import React, { use, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);
  const navigate = useNavigate();
  const { setUser, googleSignIn } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        //alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };

  const handleGoogleSignIn = () => {
    console.log("Google Button Clicked");
    googleSignIn()
      .then((result) => {
        console.log(result);
        console.log(result.user);
        navigate("/");
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      {" "}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <div className="divider">OR</div>

            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="btn btn-outline w-full"
            >
              Continue with Google
            </button>
            <p className="font-semibold text-center pt-5">
              Don't Have An Account? <Link to="/register">Register</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
