import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import EmojiPicker from "emoji-picker-react";
import Smiles from "../../assets/smiley.gif";

const ChatApp = () => {
  const navigate = useNavigate();
  const messageContainerRef = useRef(null);

  const [emojiPicker, setEmojiPicker] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const currentUser = localStorage.getItem("nickname") || "You";

  const getInitials = (nickname) => {
    console.log(nickname);
    if (!nickname || nickname.trim() === "") return "";
    return nickname.charAt(0).toUpperCase();
  };

  const API_URL = "https://sheetdb.io/api/v1/22adcqii4ojo4";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(API_URL);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    const newMessage = {
      data: [
        {
          message,
          sender: currentUser,
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      await axios.post(API_URL, newMessage);
      setMessage("");
      fetchMessages();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Can't send your message at this moment, please try again",
      });
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const onEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    setEmojiPicker(false);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("nickname");
        localStorage.removeItem("token");
        Swal.fire(
          "Logged out!",
          "You have successfully logged out.",
          "success"
        );
        navigate("/");
      }
    });
  };

  return (
    <div className="container mt-3">
      <div className="card chat-card">
        <div className="card-header text-center bg-primary text-white">
          <h3>Chat App</h3>
        </div>
        <div className="p-2" style={{ width: "100%", height: "3em" }}>
          <div className="d-flex gap-2 ">
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
            <div
              style={{
                width: "4em",
                height: "2em",
                background: "green",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              Aduke
            </div>
          </div>
        </div>
        <div className="card-body chat-body">
          <div
            className="message-container"
            ref={messageContainerRef}
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            {messages.map((msg, index) => {
              const messageTime = msg.timestamp
                ? new Date(msg.timestamp).toLocaleTimeString()
                : "N/A";
              const isCurrentUser = msg.sender === currentUser;
              const initials = getInitials(
                isCurrentUser ? currentUser : msg.sender
              );

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
            <button
              type="button"
              className="btn btn-light me-2"
              onClick={() => setEmojiPicker(!emojiPicker)}
            >
              <img width="25px" src={Smiles} alt="smileys" />
            </button>
            {emojiPicker && (
              <div style={styles.emojiPicker}>
                <EmojiPicker
                  emojiStyle="facebook"
                  onEmojiClick={onEmojiClick}
                />
              </div>
            )}
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

const styles = {
  emojiPicker: {
    position: "absolute",
    bottom: "50px",
    right: "10px",
    zIndex: 1000,
  },
};

export default ChatApp;
