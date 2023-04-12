import React, { Componet, useRef, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import SockJsClient from "react-stomp";
import { TalkBox } from "react-talk";

const GetChatList = ({ roomnumber, close }) => {
    const [chatList, setChatList] = useState([])
    const [clientConnected, setClientConnected] = useState(false)

    const topic = `/sub/chat/room/${roomnumber}`
    const clientRef = useRef(null)
    const onMessageReceive = (msg, topic) => {
        //alert(JSON.stringify(msg) + " @ " +  JSON.stringify(this.sitate.messages)+" @ " + JSON.stringify(topic));
        console.log("메세지 수신")
        console.log(msg)
        const chat = {
            message: msg.cht_text,
            authorId: msg.cht_member,
            author: msg.cht_membe,
            timestamp: msg.cht_time
        }

        setChatList(
            [...chatList, chat]
        )
    }

    const onSendMessage = (msg, selfMsg) => {

        try {
            var send_message = {
                "cht_room_num": roomnumber,
                "cht_member": parseInt(selfMsg.author),
                "cht_text": selfMsg.message
            }
            clientRef.current.sendMessage("/pub/chat/sendMessage", JSON.stringify(send_message))
            console.log(selfMsg)
            console.log(send_message)
            console.log("메세지전송!!")
            setChatList([...chatList, selfMsg])
            return true;
        } catch (e) {
            console.log(e)
            return false;
        }
    }

    useEffect(() => {
        PostingService.getChatList(roomnumber).then((res) => {
            let msg = []
            for (let i in res.data) {
                msg[i] = {
                    message: res.data[i].cht_text,
                    authorId: res.data[i].cht_member,
                    author: res.data[i].cht_member,
                    timestamp: res.data[i].cht_time
                }
            }
            console.log(msg)
            setChatList({msg})
        })

    }, [])

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
                        <TalkBox topic={topic} currentUserId="1"
                            currentUser="1" messages={chatList}
                            onSendMessage={onSendMessage} connected={clientConnected} />

                        <SockJsClient url="http://localhost:8080/ws-stomp" topics={[topic]}
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