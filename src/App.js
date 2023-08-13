import React, { useState } from "react";
import "./styles.css";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

export default function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleMessageSend = () => {
    if (inputMessage.trim() !== "") {
      const randomUserIndex = Math.floor(Math.random() * user_list.length);
      const randomUser = user_list[randomUserIndex];
      const newMessage = {
        user: randomUser,
        message: inputMessage,
        likes: 0
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <div className="main">
      <div className="flex-container">
        <div className="part1">
          <div className="header1">
            <h3>RR</h3>
            <img src="data:image/jpeg;base64,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" />
            <div className="name">
              <h4>Rialonde Riamonde</h4>
              <p>Research Nurse</p>
            </div>
          </div>
          <div className="content1">
            <div className="conversation">
              <p>Conversations</p>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAAeHh7u7u6enp6pqanh4eGioqL5+fnd3d3MzMzm5uYoKCjr6+vJycm+vr58fHyGhoZFRUVtbW1WVlY1NTVmZmbR0dE8PDxSUlLX19dERET09PS5ublfX18lJSUMDAyKiop4eHgTExNqtAvlAAAFBUlEQVR4nO2d63biIBRGoyYam2gSb/XW2jrv/44zs2xnhIANh8Nl4bd/K+vshACHEMgyAAAAAAAAAAAAAADipmqKdrOvL2O3XOr9pi2ayq9cOc/fR7455PPSk99re/Gud+PSvrrXO+fbQHo3tvnZqd+kDap3o1048zt3oeW+6Bzdx+IjtNk/PgoHftUqtJbAasotWIRW6sF7G8t1aB8Fa8bucRG2h9CxZWtU56FVtMx5BF9DezzgJXVBFsUHVXTVzZpjNXFLdWxm3UkfhHVFXWgKHncsFWQwy0/dcN+yuSnVrejOr96Nl50ylq1dp6HsB6/s44mBTJUD/7VNkaqRzImpiSYxV40dLUY3FW9xLKguOn2Ko3/B6lAV9D/TuhfVilpW/3Jt3CbYwyg3XBXr3MsHrZ5pRnrt3wftyvcy+lgEFYodpZRJr4pyx2lBr6JOCIXIfU8dwzP4zVlubgg38SxfpfCt6D1TOTzz659LJYTuB2Xkhj43LkEakJK7HGdI+cbW9P9yVhhyqKZGTutMJ/yldqZ1EqQdV6sQSykbi6uZuSE1NrVZFiVVgZ2jIO2Q8kWzB0lqSUMkvD/zIgZp1pqKY4axoxBtGQtRmo25xKvz6ShCWz7FME3+KqW+cVbSLFuKYZokwg394nhFDLMx+Kc4JIpvPPONOK4xGViK/T0p+fKCmMKa9PliUzpzFqEtMyFOk8Z0T67ffhHbi73BP8X88ugsQluOQpy1wT/FrtTziisDxF7tYvBP0ZAyB+IHcS7JZOgFw1iAoR4YxgIM9TgzLJdvS8alTNEZVreZlR3bWqbYDP8nrFwpdWSG9/N3TLOTkRke7opkelMXl6E4gctzE+MyFGdGeF5lxWUoTjKbvwxTAUM9MKQAQwow1ANDCjCkAEM9MKQAQwow1ANDCjCkAEM9MKQAQwow1ANDCjCkEJehuEKLZyWZf8NpkeuYifsuvc+0vyyGv9PwbTg/jHg4DHX0bCit2LVi4CtUv4aqj4bpDHsR7tdQ/bU8lWFfc3o1LFkFR6NBKza8GnI+hX9ZRmf4xmz4Fp1h+vcw/ecw/bZUu5MNjRj7Q/ljOSuiHNP8GXf3N6ygEeu4NEs/t3hMGvnhI9LP8WFIAYZ6YEgBhhRgqAeGFGBIAYZ6YEgBhhRgqAeGFGBIAYZ6YEgBhhRgqAeGFNL/Djj9b7mF7/EPPEVGZnh/E9PcU+HuFWqi+2Jk2eK2W/w62b1NsvT3p2EHhnpgGAsw1APDWOAyTHH/0vT3oE1/H+H094JOfz/v9PdkT39f/fTPRkj/fIsnOKMk/XNm0j8rKP3znuQzu65ugrTC7syuJzh3TT477+QiSCtsz857gvMP0z/DMv1zSJ/gLNn0zwN+gjOdYz2X+8x2LvcTnK2u3OoidL/Yr1hWE7qq4k4hB3DzkyIiq4vee6b/cg1VVadXVTh27V+5VZU52oVIiV/UX/xvLd+a676yH3eDtnVgY/l50URivexBTlLuOHWz5lhN3FIdm1mnevq+YGgV5EwxLlgel5gVmdqDBxU1MGwd10LdooZmy7a26k+noewXA7NmXFyVqUc3YWEfPlb9YXhIVi4WFxS/Qmv948PR+P/cy/oD0blLUycxOHZu1/ec87A9xzb3MM3w2vazbD/UrfHUPZFynr//HA8zh3zO2wH+SNUU7WZfX8ZuudT7TVs08a48AwAAAAAAAAAAAADgxm9Xd0/PkuJ9NwAAAABJRU5ErkJggg==" />
            </div>
          </div>
          <div className="names">
            <div className="names1">
              <h4>#</h4>
              <p>
                <strong>Poland Office</strong>
              </p>
            </div>
            <div className="names2">
              <h4>#</h4>
              <p>
                <strong>Introductions</strong>
              </p>
            </div>
            <div className="names3">
              <h4>#</h4>
              <p>
                <strong>India Office</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="header2">
            <div className="intro">
              <h4>Introductions</h4>
              <p>The channel is for only company chat</p>
            </div>
            <div className="people">
              <p>3/10</p>
              <img src="data:image/jpeg;base64,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" />
            </div>
          </div>
          <div className="chat">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <p>
                  <strong>{msg.user}: </strong>
                  {msg.message}
                </p>
                <button
                  onClick={() => {
                    const updatedMessages = [...messages];
                    updatedMessages[index].likes += 1;
                    setMessages(updatedMessages);
                  }}
                >
                  👍 ({msg.likes})
                </button>
              </div>
            ))}
          </div>
          <div className="typetext">
            <input
              type="text"
              placeholder="Type message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button onClick={handleMessageSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
