import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useNavigation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Created a new Room");
  };

  const joinRoom = () => {
    if (!userName || !roomId) {
      toast.error("Room ID & Username is required.");
      return;
    }

    navigate("/editor",{
      state:userName
    });
  };

  const handleClickEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        {/* <img src="/my-logo.png" alt="" /> */}
        <img className="homelogo" src="/editor-logo.jpg" alt="" />
        <h4 className="mainLable">Paste Room ID</h4>

        <div className="inputGroup">
          <input
            type="text "
            className="inputBox"
            placeholder="ROOM ID"
            value={roomId}
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            onKeyUp={handleClickEnter}
          />
          <input
            type="text "
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => {
              e.preventDefault();
              setUserName(e.target.value);
            }}
            onKeyUp={handleClickEnter}

          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>

          <span className="createInfo">
            if you don't have invite create
            <a onClick={createNewRoom} href="" className="createNewbtn">
              new room
            </a>
          </span>
        </div>
      </div>

      <h4 className="footer">
        Built by &nbsp;
        <a href="https://github.com/P00JARY">Ashil Poojary</a>
      </h4>
    </div>
  );
};

export default Home;
