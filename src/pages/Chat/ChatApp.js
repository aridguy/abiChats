import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../App.css"; // Optional for additional custom styling if needed
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ChatApp = () => {
  const navigate = useNavigate();
  const messageContainerRef = useRef(null); // Create a ref for the message container

  // Check if the token exists in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if token doesn't exist
    }
  }, [navigate]);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const currentUser = localStorage.getItem("nickname") || "You"; // Get nickname from local storage

  const API_URL = "https://sheetdb.io/api/v1/tad7ibwo3sh1b";

  // Fetch messages
  const fetchMessages = async () => {
    try {
      const response = await axios.get(API_URL);
    //   console.log("Fetched Messages:", response.data);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Send a new message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    const newMessage = {
      data: [
        {
          message,
          sender: currentUser, // Adding sender to the message
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      await axios.post(API_URL, newMessage);
      setMessage("");
      fetchMessages(); // Refresh messages after sending
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 7000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Cant send your message at this moment pls try again"
      });
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000); // Poll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Scroll to the bottom of the message container
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]); // Run this effect whenever messages change

  // Function to get initials from the nickname
  const getInitials = (nickname) => {
    if (!nickname || nickname.trim() === "") return ""; // Handle cases where nickname is empty
    return nickname.charAt(0).toUpperCase(); // Get the first letter as initials
  };

  // Handling logout
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("nickname"); // Remove the correct key
        localStorage.removeItem("token"); // Remove the correct key
        Swal.fire({
          title: "Logged out!",
          text: "You have successfully logged out.",
          icon: "success",
        });
        navigate("/"); // Navigate to the home page
      }
    });
  };

  return (
    <div className="container mt-5">
      <div className="card chat-card">
        <div className="card-header text-center bg-primary text-white">
          <h3>Chat App</h3>
        </div>
        <div className="card-body chat-body">
          <div className="message-container" ref={messageContainerRef} style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {messages.map((msg, index) => {
              const messageTime = msg.timestamp
                ? new Date(msg.timestamp).toLocaleTimeString()
                : "N/A";
              const isCurrentUser = msg.sender === currentUser; // Check if the message is from the current user
              const initials = getInitials(
                isCurrentUser ? currentUser : msg.sender
              ); // Get initials based on sender

              return (
                <div
                  key={index}
                  className={`message-box p-2 mb-2 d-flex align-items-center ${
                    isCurrentUser ? "justify-content-end" : ""
                  }`}
                >
                  {!isCurrentUser && (
                    <div className="message-circle me-2">{initials}</div>
                  )}
                  <div
                    className={`message-text flex-grow-1 ${
                      isCurrentUser ? "text-end" : ""
                    }`}
                  >
                    <strong>{msg.message}</strong>
                  </div>
                  <div
                    className={`message-time text-muted small ${
                      isCurrentUser ? "d-none" : ""
                    }`}
                  >
                    {messageTime}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="card-footer">
          <form className="d-flex" onSubmit={sendMessage}>
            <input
              type="text"
              className="form-control me-2"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <button onClick={handleLogout} className="btn btn-danger mt-3">
        Logout
      </button>
    </div>
  );
};

export default ChatApp;
