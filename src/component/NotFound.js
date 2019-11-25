import React from "react";

const NotFound = () => (
  <div className="jumbotron bg-white">
    <h1 className="display-4">Unfound page !</h1>
    <p className="lead">
      Sorry, this page does not exist.
    </p>
    <a className="btn btn-primary btn-lg" href="/" role="button">
      Go back
    </a>
  </div>
);

export default NotFound;