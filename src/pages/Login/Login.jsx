import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { user, signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleToLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        // console.log(result.user);
        setSuccess("Login Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  const handleToLoginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const handleToLoginWithGithub = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <div className="mx-auto w-full bg-base-200 py-8">
        <div className=" flex-col items-center">
          <div className="text-center ">
            <h1 className="text-5xl font-semibold mb-8">
              <span className="text-[#ffc000]">Please</span>
              <span className="text-[#ff0018]"> login!</span>
            </h1>
          </div>
          <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleToLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className=" label-text-alt  link link-hover ">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="text-red-500">{error}</p>
              <p className="text-green-400">{success}</p>
              <div className="form-control mt-6">
                <button className="btn bg-[#ff0018] border-none font-medium text-lg hover:bg-[#d30c01] capitalize">
                  Login
                </button>
              </div>
              <p>
                Don't have an account?
                <Link
                  to="/register"
                  className="text-[#ff0018] ps-1 hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
            <div className="flex justify-between gap-4 pb-8 mx-auto">
              <button
                onClick={handleToLoginWithGoogle}
                className="btn btn-outline btn-warning  capitalize font-medium text-lg hover:text-[#ffffff] "
              >
                Google Sign-in
              </button>
              <button
                onClick={handleToLoginWithGithub}
                className="btn btn-outline btn-success capitalize font-medium text-lg"
              >
                Github Sign-in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
