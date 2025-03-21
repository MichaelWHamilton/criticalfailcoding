import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import "../styles/ChatRoom.css";

const socket = io("https://chatroom-backend-qv2y.onrender.com");

const readableColors = [
    "#FFB6C1", "#87CEFA", "#98FB98", "#FFD700", "#FF69B4", "#FFA07A",
    "#20B2AA", "#778899", "#B0C4DE", "#32CD32", "#FF4500", "#DA70D6",
    "#EEE8AA", "#AFEEEE", "#DB7093", "#FFEFD5", "#FFDAB9", "#CD853F",
    "#FFC0CB", "#DDA0DD", "#B0E0E6", "#BC8F8F", "#4169E1", "#8B4513",
    "#FA8072", "#F4A460", "#2E8B57", "#FFF5EE", "#A0522D", "#C0C0C0",
    "#87CEEB", "#6A5ACD", "#708090", "#FFFAFA", "#00FF7F", "#4682B4",
    "#D2B48C", "#008080", "#D8BFD8", "#FF6347", "#40E0D0", "#EE82EE",
    "#F5DEB3", "#F5F5F5", "#FFFF00", "#9ACD32"
  ];

  const getRandomReadableColor = () => readableColors[Math.floor(Math.random() * readableColors.length)];

  const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("");
    const [pendingFile, setPendingFile] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const messagesRef = useRef(null);
    const userColors = useRef({});
    const [darkMode, setDarkMode] = useState(false);

    const fetchSuggestions = async (prefix) => {
        const res = await fetch(`https://api.datamuse.com/words?sp=${prefix}*&max=10`);
        const words = await res.json();
        return words.map(word => word.word);
    };

    const handleInputChange = async (e) => {
        const text = e.target.value;
        setInput(text);
        const lastWord = text.split(" ").pop();
        if (lastWord.length >= 2) {
          const matches = await fetchSuggestions(lastWord);
          setSuggestions(matches);
        } else {
          setSuggestions([]);
        }
    };

    const formatUsername = (msg) => {
        return msg.replace(/User-\d{4}/g, (match) => {
          const color = userColors.current[match]?.usernameColor || "black";
          return `<span style=\"color: ${color}; font-weight: bold;\">${match}</span>`;
        });
    };

    const handleSend = () => {
        if (!input.trim()) return;
        if (pendingFile) {
          const formData = new FormData();
          formData.append("file", pendingFile);
          formData.append("username", username);
          fetch("https://chatroom-backend-qv2y.onrender.com/upload", {
            method: "POST",
            body: formData,
          }).then(res => res.json())
            .then(data => console.log(data));
          setPendingFile(null);
          setInput("");
        } else {
          socket.emit("message", { username, message: input });
          setInput("");
          setSuggestions([]);
        }
    };

    useEffect(() => {
        socket.on("connect", () => console.log("Connected to server"));
        socket.on("set_username", (data) => setUsername(data.username));
        socket.on("message", (data) => {
          if (!userColors.current[data.username]) {
            userColors.current[data.username] = {
              usernameColor: getRandomReadableColor(),
              messageColor: getRandomReadableColor()
            };
          }
          setMessages((prev) => [...prev, data]);
        });
    }, []);
    
    useEffect(() => {
        if (messagesRef.current) {
          messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className={`chatroom ${darkMode ? "dark-mode" : "light-mode"}`}>
          <h1>Chatroom</h1>
          <button id="toggleMode" onClick={() => setDarkMode(!darkMode)}>Toggle Dark/Light Mode</button>
    
          <div id="messages" className="messages" ref={messagesRef}>
            {messages.map((msg, index) => {
              const userColor = userColors.current[msg.username]?.usernameColor;
              const msgColor = userColors.current[msg.username]?.messageColor;
              return (
                <div key={index} className={darkMode ? "dark-mode" : "light-mode"}>
                  <span style={{ color: userColor, fontWeight: "bold" }}>{msg.username}: </span>
                  {msg.file_url ? (
                    /\.(jpg|jpeg|png|gif)$/i.test(msg.file_url) ? (
                      <img src={`https://chatroom-backend-qv2y.onrender.com${msg.file_url}`} alt={msg.message} style={{ maxWidth: "100%", height: "auto" }} />
                    ) : /\.(mp4|mov|avi|webm)$/i.test(msg.file_url) ? (
                      <video src={`https://chatroom-backend-qv2y.onrender.com${msg.file_url}`} controls style={{ maxWidth: "100%", height: "auto" }} />
                    ) : (
                      <a href={`https://chatroom-backend-qv2y.onrender.com${msg.file_url}`} target="_blank" rel="noreferrer">
                        {msg.message}
                      </a>
                    )
                  ) : (
                    <span style={{ color: msgColor }} dangerouslySetInnerHTML={{ __html: formatUsername(msg.message) }} />
                  )}
                </div>
              );
            })}
          </div>
    
          <div className="input-area" style={{ position: "relative", width: "90%", margin: "auto", display: "flex", alignItems: "center" }}>
            <button onClick={() => document.getElementById("fileInput").click()}>+</button>
            <input
              type="file"
              id="fileInput"
              accept=".txt,.jpg,.jpeg,.png,.gif,.mov,.avi,.mp4,.webm"
              style={{ display: "none" }}
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  setPendingFile(e.target.files[0]);
                  setInput(`[File ready to be sent: ${e.target.files[0].name}]`);
                }
              }}
            />
            <input
              id="input"
              type="text"
              value={input}
              placeholder="Type a message..."
              autoComplete="off"
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button id="sendButton" onClick={handleSend}>Send</button>
            {suggestions.length > 0 && (
              <div id="autocomplete-box" className="autocomplete-suggestions">
                {suggestions.map((word, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      const words = input.split(" ");
                      words.pop();
                      words.push(word);
                      setInput(words.join(" ") + " ");
                      setSuggestions([]);
                    }}
                  >
                    {word}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
    );
}

export default ChatRoom;