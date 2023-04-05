import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const GetChatList = ({ roomnumber, close }) => {
    const [chatList, setChatList] = useState([])

    useEffect(() => {
        PostingService.getChatList(roomnumber).then((res) => {
            setChatList(res.data.chattingList)
            console.log(res.data)
        })

    }, [])
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
                        {
                            chatList.map((chat) =>
                                <tr><td>작성시간: {chat.cht_time}</td><td>작성자: {chat.cht_member}</td><td>내용: {chat.cht_text}</td></tr>
                            )
                        }
                    </table>
                </div>
                <br/>
                <button>삭제</button> &nbsp;
                <button onClick={close}>닫기</button>
            </div>
        </div>
    );
}

export default GetChatList;