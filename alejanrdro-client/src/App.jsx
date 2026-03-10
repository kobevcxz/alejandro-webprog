import React from "react";
import "./App.css";

function app() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App! </h1>
        <p>
          Name: Dirk Alejandro
          <br />
          Email: dirk.alejandro@example.com
          <br />
          Other Personal Info:{" "}
          <a href="https://github.com/kobevcxz/alejandro-webprog">
            GitHub Profile
          </a>
        </p>
      </header>
    </div>
  );
}
