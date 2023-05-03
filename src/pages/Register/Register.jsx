import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const handleToRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    form.reset();
    console.log(name, email, password, photoUrl);
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
                <label className="label">
                  <a href="#" className=" label-text-alt  link link-hover ">
                    Forgot password?
                  </a>
                </label>
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
