import React, { useState } from "react";
import "../../Styles/login.css";

function LoginPage({ setLoginAction, setUser }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let form = document.forms.Login;
    const formData = new FormData(form);
    const Email = formData.get("loginEmail");
    const Password = formData.get("loginPassword");

    fetch(`http://localhost:9000/user/${Email}/user/${Password}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setUser(data);
          alert("Login successful");
          setLoginAction(true);
        } else {
          alert("Login failed");
        }
      })
      .catch((err) => alert("Error: " + err));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    let form = document.forms.Signup;
    const formData = new FormData(form);
    const Name = formData.get("Name");

    const Email = formData.get("Email");

    const Password = formData.get("Password");

    fetch("http://localhost:9000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: Name,
        Gmail: Email,
        Password: Password,
      }),
    })
      .then((resp) => {
        console.log(resp);
        console.log(Email);
        console.log(Password);
        if (resp.headers.get("content-type")?.includes("application/json")) {
          return resp.json(); // Parse JSON if response is JSON
        } else {
          return resp.text(); // Parse as text if response is plain text
        }
      })
      .then((data) => {
        if (data) {
          alert(data);
        }
      })
      .catch((err) => alert("Error: " + err));
  };

  return (
    <React.Fragment>
      <div className="loginBody">
        <div className="wrapper">
          <div className="title-text">
            <div className={`title ${isLogin ? "login" : "signup"}`}>
              {isLogin ? "Login Form" : "Signup Form"}
            </div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input
                type="radio"
                name="slide"
                id="login"
                checked={isLogin}
                onChange={handleLoginClick}
              />
              <input
                type="radio"
                name="slide"
                id="signup"
                checked={!isLogin}
                onChange={handleSignupClick}
              />
              <label
                htmlFor="login"
                className="slide login"
                onClick={handleLoginClick}
              >
                Login
              </label>
              <label
                htmlFor="signup"
                className="slide signup"
                onClick={handleSignupClick}
              >
                Signup
              </label>
              <div
                className="slider-tab"
                style={{ left: isLogin ? "0%" : "50%" }}
              ></div>
            </div>
            <div className="form-inner">
              {isLogin ? (
                <form className="login" onSubmit={handleLogin} id="Login">
                  <div className="field">
                    <input
                      type="text"
                      name="loginEmail"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      name="loginPassword"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="pass-link">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Login" />
                  </div>
                  <div className="signup-link">
                    Not a member?{" "}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSignupClick();
                      }}
                    >
                      Signup now
                    </a>
                  </div>
                </form>
              ) : (
                <form className="signup" onSubmit={handleSignup} id="Signup">
                  <div className="field">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      name="Email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      name="Password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Signup" />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
