import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState(location.state?.email || "");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    // if user came directly without state, keep empty
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = async (e) => {
    e.preventDefault();
    setMsg("");
    setErr("");

    if (!email.trim()) return setErr("Please enter your email.");

    try {
      await resetPassword(email.trim());
      setMsg("Reset email sent. Redirecting to Gmail...");

      window.location.href = "https://mail.google.com/";
    } catch (error) {
      setErr(error.code || "Failed to send reset email.");
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Forgot Password</h2>

        <form onSubmit={handleReset} className="card-body">
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {err && <p className="text-error text-sm mt-2">{err}</p>}
          {msg && <p className="text-success text-sm mt-2">{msg}</p>}

          <button className="btn btn-primary mt-4">Reset Password</button>

          <div className="mt-3 text-center">
            <Link to="/login" className="link link-hover text-sm">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
