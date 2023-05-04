import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <img
            className="h-32 w-32"
            src="https://www.svgrepo.com/show/511565/bug-spider-826.svg"
            alt=""
          />
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-8xl text-red-600">
              <span className="sr-only">Error</span> {status || 404}
            </h2>
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded bg-violet-200 text-gray text-xl"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
