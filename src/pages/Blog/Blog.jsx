import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
  return (
    <div>
      <Pdf targetRef={ref} filename="reactQuestionsAns.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className="btn btn-warning mx-auto block mt-6 text-xl text-white"
          >
            Generate Pdf
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <div className="bg-yellow-100 ">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 my-10 p-8">
            <div className="text-2xl text-justify ">
              <h1 className="mb-4">
                <strong>
                  Tell us the differences between uncontrolled and controlled
                  components.
                </strong>
              </h1>
              <p>
                {" "}
                <strong>Controlled component: </strong>
                A controlled component is bound to a value, and its changes will
                be handled in code by using event-based callbacks. Here, the
                input form element is handled by the react itself rather than
                the DOM. In this, the mutable state is kept in the state
                property and will be updated only with setState()
                method.Controlled components have functions that govern the data
                passing into them on every onChange event occurs. <br />
                <strong>Uncontrolled component: </strong>t is similar to the
                traditional HTML form inputs. Here, the form data is handled by
                the DOM itself. It maintains their own state and will be updated
                when the input value changes. To write an uncontrolled
                component, there is no need to write an event handler for every
                state update, and you can use a ref to access the value of the
                form from the DOM.
              </p>
            </div>
            <div className="text-2xl text-justify">
              <h1 className="mb-4">
                <strong>How to validate React props using PropTypes?</strong>
              </h1>

              <ul>
                <li>PropTypes.any: The prop can be of any data type</li>
                <li>PropTypes.bool: The prop should be a Boolean</li>
                <li>PropTypes.string: The prop should be a string</li>
                <li>PropTypes.func: The prop should be a function</li>
                <li>PropTypes.array: The prop should be an array</li>
                <li>PropTypes.object: The prop should be an object</li>
                <li>PropTypes.symbol: The prop should be a symbol</li>
              </ul>
            </div>

            <div className="text-2xl text-justify">
              <h1 className="mb-4">
                <strong>
                  Tell us the difference between nodejs and express js. .
                </strong>
              </h1>
              <p>
                <strong>NodeJs: </strong>
                NodeJS is a popular app development platform that is open-source
                and runs on servers. It is a cross-platform Javascript code used
                by developers these days to develop scalable apps. these days.
                The platform leverages a model that is asynchronous and
                event-driven. It is specifically designed to develop robust
                network applications. The platform is built on the V8 engine of
                Google, which makes it an efficient choice for the development
                of apps. <br />
                <strong>ExpressJS: </strong>
                ExpressJS is a web application framework used for NodeJS. It is
                the major difference between the two options. ExpressJS has
                several extraordinary features that make web app development
                easy and fast.
              </p>
            </div>
            <div className="text-2xl text-justify">
              <h1 className="mb-4">
                <strong>
                  What is custom hook, and why will you create a custom hook?
                </strong>
              </h1>
              <p>
                A custom hook is a special JavaScript function whose name starts
                with ‘use’ and can be used to call other hooks. Some major
                differences between a custom React JS hook and React JS
                components in the below: <br /> 1. A custom hook does not
                require a specific signature. <br /> 2. A custom hook always
                starts with the name ‘use’.
                <br />
                Custom React JS hooks offer three major benefits over standard
                library hooks: Reusability, readability, and testability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
