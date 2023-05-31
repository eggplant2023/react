import React, { Componet, useRef, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import SockJsClient from "react-stomp";
import { TalkBox } from "react-talk";
import ChatBox from './ChatBox';

const GetChatList = ({ roomnumber, close }) => {
    const [chatList, setChatList] = useState([])
    const [clientConnected, setClientConnected] = useState(false)
    const [apponent, setApponent] = useState("")
    const topic = `/sub/chat/room/${roomnumber}`
    const clientRef = useRef(null)
    const [currentUser, setCurrentUser] = useState(71)

    //const chatUrl = "http://localhost:8080/ws-stomp"
    const chatUrl = "http://52.78.130.186:8080/ws-stomp"
    const onMessageReceive = (msg, topic) => {

        console.log("메세지 수신")
        if (msg.cht_member == currentUser) {
            const chat = {
                message: msg.cht_text,
                authorId: msg.cht_member,
                timestamp: msg.cht_time
            }
            console.log(chat)
            setChatList(
                [...chatList, chat]
            )
        }
        else{
            const chat = {
                message: msg.cht_text,
                authorId: msg.cht_member,
                author: msg.cht_member_name,
                timestamp: msg.cht_time
            }
            console.log(chat)
            setChatList(
                [...chatList, chat]
            )
        }
    }

    const onSendMessage = (msg) => {
        try {
            var send_message = {
                "cht_room_num": roomnumber,
                "cht_member": parseInt(currentUser),
                "cht_text": msg
            }
            clientRef.current.sendMessage("/pub/chat/sendMessage", JSON.stringify(send_message))
            console.log(send_message)
            console.log("메세지전송!!")
            return true;
        } catch (e) {
            console.log(e)
            return false;
        }
    }

    const setMessages = (msg) => {
        setChatList([...chatList, msg])
    }

    const onConnect = () => {
        console.log("소켓 연결성공!!!!")
        setClientConnected(true)
    }

    const onDisconnect = () => {
        console.log("소켓 연결해제!!!!")
        setClientConnected(true)
    }

    return (
        <div className="modal">
            <div className="modal_body">
                <div className="modal-header">
                    <h1>채팅방 관리</h1>
                </div>
                <hr />
                <br />
                <div className="content_area">
                    <div>
                        <ChatBox topic={topic} currentUserId={currentUser}
                            currentUser="admin" messages={chatList} setMessages={setChatList}
                            onSendMessage={onSendMessage} connected={clientConnected} roomnumber={roomnumber}/>

                        <SockJsClient url={chatUrl} topics={[topic]}
                            onMessage={onMessageReceive} ref={clientRef}
                            onConnect={onConnect}
                            onDisconnect={onDisconnect}
                            debug={false} style={[{ width: '100%', height: '90%' }]} />
                    </div>
                </div>
                <button onClick={close}>닫기</button>
            </div>
        </div>
    );
}

export default GetChatList;