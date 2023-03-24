import React from "react";
import ChatroomForGuest from "../components/ChatroomForGuest";
import GetChatroom from "../components/GetChatroomList";

const Chatroom = () => {
    return (
        <div className="chatroom_container">
            <div className="header"> 
                <h1>채팅방 관리</h1>
            </div>
            <hr />
            <div className="body">
                <GetChatroom />
            </div>
                
        </div>
    )
}

export default Chatroom;