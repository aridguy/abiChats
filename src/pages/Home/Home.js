import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate("/")
  return (
    <div>
      <nav className="container mx-5 navbar navbar-expand navbar-light">
        <a className="navbar-brand fw-bold" href="/">
          Abike Chats
        </a>
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link px-3" href="#about">
            About
          </a>
          <a className="nav-item nav-link px-3" href="#contact">
            Contact
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="jumbotron">
              <h1 className="display-3">Hello, 😎😍 </h1>
              <p className="lead display-4">
                Free Agege random chats For Guest Chatting without registration
                or sign up
              </p>
              <hr className="my-4" />
              <p>
                This mini chat app allows for a wide range of discussions,
                including current news, language study, games, and product
                suggestions. Users can join to discuss the latest news, get
                advice on tech items, meet other people.
              </p>
              <p className="lead">
                <button onClick={() => navigate("/login")} className="btn btn-primary btn-lg">
                  Enter The Chat
                </button>
              </p>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    
    </div>
  );
};

export default Home;
