import React from "react";
import GetChatroomList from "../components/GetChatroomList";
import Menu from "../components/Menu"; 
const Chatroom = () => {
    return (
        <>
        <Menu/>
        <div className="post_container">
            <div className="header"> 
                <h1>채팅방 관리</h1>
            </div>
            <hr />
            <div className="body">
                <GetChatroomList />
            </div>

        </div>
        </>
    )
}

export default Chatroom;