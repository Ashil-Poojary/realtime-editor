import React, { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const EditorPage = () => {
  const [clients, setClients] = useState([
    {
      socketId: 0,
      username: "Nishmitha U",
    },
    {
      socketId: 1,
      username: "John Doe",
    },
    {
      socketId: 1,
      username: "John Doe",
    },
  
    
  ]);


  const navigate=useNavigate()



    const copyRoomId=()=>{
      toast.success("Successfully copied ROOM ID.");
    
    }

  const leaveRoom=()=>{
    
    navigate("/")
    toast.success("Left Room!");



  }
  return (
    <div className="mainWrapper">
      <div className="aside">
        <div className="innerSide"> 
          <div className="logo">
            <img src="/logo192.png" alt="logo" />
          </div>

          <h3 className="sideText">Connected</h3>
          <div className="clientList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn" onClick={copyRoomId}>Copy ROOM ID</button>
        <button className="btn leaveBtn" onClick={leaveRoom}>Leave</button>
      </div>

      <div className="editorWrap">


        <Editor/>
      </div>
    </div>
  );
};

export default EditorPage;
