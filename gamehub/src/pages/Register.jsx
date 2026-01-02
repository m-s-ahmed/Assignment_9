import React, { use, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const [nameError, setNameError] = useState("");

  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    //form theke value gulo access korsi
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // name validation
    if (name.length < 5) {
      setNameError("Name should be more than five characters.");
      return;
    } else {
      setNameError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        //akta object diye dite hobe
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            //user jokhn ase tokhn tar name ba photo amader kase thake na. sejonno aivabe korte hobe
            //setUser(user);
            //upore je user ase tar shob gulo value niye naw and new kore set kore felo
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      {" "}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}

            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* photourl */}

            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />
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

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <div className="divider">OR</div>

            <button type="button" className="btn btn-outline w-full">
              Continue with Google
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account? <Link to="/login">Login</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
