import React, { Componet, useRef, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import SockJsClient from "react-stomp";
import { TalkBox } from "react-talk";

const GetChatList = ({ roomnumber, close }) => {
    const [chatList, setChatList] = useState([])
    const [inputMessage, setInputMessage] = useState({});
    const [clientConnected,setClientConnected] = useState(false)
    
    const client = useRef()
    const topic = `/sub/chat/room/${roomnumber}`
    const onMessageReceive = (msg, topic) => {
        //alert(JSON.stringify(msg) + " @ " +  JSON.stringify(this.state.messages)+" @ " + JSON.stringify(topic));
        setChatList(
          [...chatList, msg]
        )
    }

    const sendMessage = (msg, selfMsg) => {
        try {
          var send_message = {
            "cht_room_num": roomnumber,
            "cht_member" : selfMsg.author,
            "cht_text" : selfMsg.message
          }
          client.current.sendMessage("/app/message", JSON.stringify(send_message))
          return true;
        } catch(e) {
            console.log(e)
          return false;
        }
      }

    useEffect(() => {
        PostingService.getChatList(roomnumber).then((res) => {
            setChatList(res.data.chattingList)
            console.log(res.data)
        })

    }, [])


    const submit = () => {
        PostingService.getChatList(roomnumber).then((res) => {
            setChatList(res.data.chattingList)
        })
    }

    const changeChat = (e) => {
        setInputMessage(e.target.value)
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

                    <table className="chat_table">
                        <tbody>
                            {
                                chatList.map((chat) =>
                                    <tr><td>작성시간: {chat.cht_time}</td><td>작성자: {chat.cht_member}</td><td>내용: {chat.cht_text}</td></tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <br />
                <div>
                    <TalkBox topic={topic} currentUserId="1"
                        currentUser="user1" messages={chatList}
                        onSendMessage={sendMessage} connected={clientConnected} />

                    <SockJsClient url="http://localhost:8080/ws-stomp" topics={[topic]}
                        onMessage={onMessageReceive} ref={client}
                        onConnect={() =>  setClientConnected(true) }
                        onDisconnect={() => setClientConnected(true)}
                        debug={false} style={[{ width: '100%', height: '100%' }]} />
                </div>
                <div>
                    <form>
                        <input type="text" onChange={changeChat}></input>
                        <button onClick={submit}>등록</button>
                    </form>
                </div>
                <button>삭제</button> &nbsp;
                <button onClick={close}>닫기</button>
            </div>
        </div>
    );
}

export default GetChatList;