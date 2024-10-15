import React, { useState } from "react";
import Logo from "../../assets/logo/logo_home.PNG";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();


  // Function to generate a random 30-character token
  const generateToken = () => {
    return Math.random().toString(36).substring(2, 32) + Math.random().toString(36).substring(2, 32).slice(0, 30);
  };

  // Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  if (nickname) {
    // Generate a token
    const token = generateToken();

    // Save nickname and token to localStorage
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("token", token);

    // Redirect to the chat app
    navigate("/chatapp");
      ;
  } else {
    alert("Please enter a nickname");
  }
};


  return (
    <div>
      <div className="bg-primary p-4 text-white" style={{ height: "9em" }}>
        <small className="lead fw-bolder cursor">JABALIA CHATS</small>
      </div>
      <div className="container">
        <div className="row" style={{ position: "relative", bottom: "4em" }}>
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div
              className="loginTitle"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "4em",
                background: "#e9ecef",
                borderBottom: "1px solid black",
              }}
            >
              <small>You are 15 seconds away from Agege's random chat</small>
            </div>
            <div
              className="loginTitle pt-3"
              style={{
                textAlign: "center",
                alignItems: "center",
                width: "100%",
                height: "24em",
                background: "#e9ecef",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                borderBottom: "1px solid black",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <img width={100} src={Logo} alt="logo" loading="lazy" />{" "}
                    <br />
                    <small>ABIKE RANDOM CHATS</small>
                    <div>
                      <sup>Enter a nickname to introduce yourself</sup>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <input
                        className="form-control"
                        style={{ width: "100%", height: "3em" }}
                        type="text"
                        placeholder="Example - ghadaffi"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                      />
                      <button
                        style={{ width: "100%" }}
                        className="btn btn-light btn-block mt-2"
                        type="submit"
                      >
                        Continue to chat
                      </button>
                      <small className="text-primary mt-3 cursor">
                        Already have an account?
                      </small>
                      <br />
                      <Marquee
                        pauseOnHover={true}
                        loop={0}
                        className=" mt-3 cursor"
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Note:
                        The Abike random chat does not save or keep your
                        personal information nor ask for, our chat website is
                        currently the only one in Agege beware of scams verify
                        link before submitting important information on any
                        platform 😬
                      </Marquee>
                    </form>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>

              <small></small>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
