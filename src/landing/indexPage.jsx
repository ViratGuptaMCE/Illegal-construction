import React from 'react'
import './css/style.css'

const IndexPage = () => {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");
  const toggleThemeButton = document.getElementById("toggleTheme");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    toggleThemeButton.textContent = isDarkMode
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
  });

  // script.js
  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("showPassword");

  showPasswordCheckbox.addEventListener("change", function () {
    if (this.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });

  // script.js
  const passwordInput1 = document.getElementById("password2");
  const showPasswordCheckbox1 = document.getElementById("showPassword2");

  showPasswordCheckbox1.addEventListener("change", function () {
    if (this.checked) {
      passwordInput1.type = "text";
    } else {
      passwordInput1.type = "password";
    }
  });
  // Example of users stored in an object (for simplicity)
  const users = {
    admin: { areaCode: "001", password: "adminpass" },
    user1: { areaCode: "002", password: "user1pass" },
    partner: { areaCode: "003", password: "partnerpass" },
  };

  // Login form submission handler
  document
    .getElementById("adminloginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Getting form values
      const areaCode = document
        .querySelector('input[name="area-code"]')
        .value.trim();
      const userId = document
        .querySelector('input[name="user-id"]')
        .value.trim();
      const password = document
        .querySelector('input[name="password"]')
        .value.trim();

      // Check if the user exists in the users object
      if (users[userId]) {
        // Validate area code and password
        if (
          users[userId].areaCode === areaCode &&
          users[userId].password === password
        ) {
          alert(`Logged in successfully as ${userId}!`);
          window.location.href = "admin-dashboard.html"; // Redirect to a general dashboard
        } else {
          alert("Invalid credentials! Please try again.");
        }
      } else {
        alert("User ID not found! Please check your credentials.");
      }
    });

  // Example of users stored in an object (for simplicity)
  const users2 = {
    corporate1: { corpoareaCode: "001", corpopassword: "corp1pass" },
    corporate2: { corpoareaCode: "002", corpopassword: "corp2pass" },
    corporate3: { corpoareaCode: "003", corpopassword: "corp3pass" },
  };

  // Login form submission handler
  document
    .getElementById("corpo-loginform")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Getting form values
      const corpoareaCode = document
        .querySelector('input[name="corpo-area-code"]')
        .value.trim();
      const corpouserId = document
        .querySelector('input[name="corpo-user-id"]')
        .value.trim();
      const corpopassword = document
        .querySelector('input[name="corpo-password"]')
        .value.trim();

      // Check if the user exists in the users object
      if (users2[corpouserId]) {
        // Validate area code and password
        if (
          users2[corpouserId].corpoareaCode === corpoareaCode &&
          users2[corpouserId].corpopassword === corpopassword
        ) {
          alert(`Logged in successfully as ${corpouserId}!`);
          if (corpouserId.startsWith("corporate")) {
            window.location.href = "corpo-dashboard.html"; // Redirect to corporate dashboard
          } else {
            window.location.href = "admin-dashboard.html"; // Redirect to a general dashboard
          }
        } else {
          alert("Invalid credentials! Please try again.");
        }
      } else {
        alert("User ID not found! Please check your credentials.");
      }
    });

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">UrbanEyeMonitor.com</div>
          <ul className="nav-links">
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#about">Services We provide</a>
            </li>
            <li>
              <a href="#services">Why to Choose Us?</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="theme-toggle">
        <button id="toggleTheme">Switch to Dark Mode</button>
      </div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form id="corpo-loginform">
            <h1>LOGIN AS CORPORATE</h1>
            <input
              type="number"
              name="corpo-area-code"
              placeholder="Area Code"
            />
            <input type="text" name="corpo-user-id" placeholder="USER-ID" />
            <input
              id="password"
              type="password"
              name="corpo-password"
              placeholder="Password"
            />
            <label>
              <input type="checkbox" id="showPassword" /> Show Password
            </label>
            <a href="#">Forgot your password?</a>
            <button type="submit" className="btn-signin">
              Sign IN
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form id="adminloginForm">
            <h1>LOGIN AS ADMIN</h1>
            <input type="number" name="area-code" placeholder="Area-Code" />
            <input type="text" name="user-id" placeholder="USER-ID" />
            <input
              id="password2"
              type="password"
              name="password"
              placeholder="Password"
            />
            <label>
              <input type="checkbox" id="showPassword2" /> Show Password
            </label>
            <a href="#">Forgot your password?</a>
            <button type="submit" className="btn-signin">
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 id="welcomeback">Welcome Back!</h1>
              <p>
                To get connected to your profile , please Login with your
                correct info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1 id="Hello">Hello!</h1>
              <p>
                Sign-in here with your Credentials if you are Our
                Business-Partner
              </p>
              <button className="ghost" id="signUp">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage