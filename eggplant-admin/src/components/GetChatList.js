import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import Stomp from '@stomp/stompjs'
import SockJs from 'sockjs-client'

const GetChatList = ({ roomnumber, close }) => {
    const [chatList, setChatList] = useState([])
    const [inputMessage, setInputMessage] = useState({});

    const client = useRef();

    const connectHaner = () => {
        client.current = Stomp.over(() => {
            const sock = new SockJS("http://localhost:8080/chat")
            return sock;
        });
        client.current.connect(
            // {
            //     // 여기에서 유효성 검증을 위해 header를 넣어줄 수 있음.
            //     // ex) 
            //     Authorization: token
            // },
            // () => {
            //     // callback 함수 설정, 대부분 여기에 sub 함수 씀
            //     client.current.subscribe(
            //         `/백엔드와 협의한 api주소/${roomnumber}`,
            //         (message) => {
            //             setChatList([...message.body]);
            //         },
            //         {
            //             // 여기에도 유효성 검증을 위한 header 넣어 줄 수 있음
            //         }
            //     );
            // }
        );
    }

    const sendHandler = () => {
        client.current.send(
            "/sendMessage",
            { "Content-Type": "application/json" },
            JSON.stringify({
                chat_room_num: roomId,
                cht_member: user.name,
                cht_text: inputMessage
            })
        );
    };

    useEffect(() => {
        PostingService.getChatList(roomnumber).then((res) => {
            setChatList(res.data.chattingList)
            console.log(res.data)
        })

    }, [])


    const submit = () => {
        sendHandler()
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