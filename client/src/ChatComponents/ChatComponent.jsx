import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:8081");

function ChatComponent(props) {
  const [room, setRoom] = useState(props.room);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (message.trim() !== "") {
      const newMessage = { text: message, sender: "me" };
      socket.emit("send_message", { message: newMessage, room });
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages, data.message];
        const uniqueMessages = Array.from(
          new Set(newMessages.map(JSON.stringify)),
          JSON.parse
        );
        return uniqueMessages;
      });
    });
  }, [socket]);

  useEffect(() => {
    joinRoom();
  }, [props.room]);

  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="input-group"></div>
              <div className="message-container">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message ${
                      msg.sender === "me" ? "sent" : "received"
                    } mb-2`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={sendMessage}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;
