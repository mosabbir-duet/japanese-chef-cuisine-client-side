import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  // console.log(createUser);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleToRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    form.reset();
    // console.log(name, email, password, photoUrl);

    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    if (!email) {
      setError("Please give a valid email");
      return;
    }

    if (!password) {
      setError("Please give password which contain at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        updateUserinfo(result.user, name, photoUrl);
        setSuccess("User has been registered successfully");
      })
      .catch((error) => {
        setError(error);
      });

    const updateUserinfo = (user, name, photoUrl) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photoUrl,
      })
        .then(() => {
          // console.log("Updated Successfully");
        })
        .catch((error) => {
          // console.error(error.message);
        });
    };
  };

  return (
    <>
      <div className="mx-auto w-full bg-base-200 py-8">
        <div className=" flex-col items-center">
          <div className="text-center ">
            <h1 className="text-5xl font-semibold mb-8">
              <span className="text-[#ffc000]">Please</span>
              <span className="text-[#ff0018]"> Register!</span>
            </h1>
          </div>
          <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleToRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#ff0018]">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered input-warning"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#ff0018]">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered input-warning"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#ff0018]">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-warning input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#ff0018]">
                    Photo Url
                  </span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="photo url"
                  className="input input-warning input-bordered"
                  required
                />
              </div>
              <p className="text-red-500">
                <strong>{error}</strong>
              </p>
              <div className="form-control mt-6">
                <button className="btn bg-[#ff0018] border-none font-medium text-lg hover:bg-[#d30c01] capitalize">
                  Register
                </button>
              </div>
              <p>
                Have an account?
                <Link
                  to="/login"
                  className="text-[#ff0018] ps-1 hover:underline"
                >
                  Login
                </Link>
              </p>
              <p className="text-green-400">{success}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
