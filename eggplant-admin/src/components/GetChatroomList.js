import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';


const GetChatroom = () => {
    const [chatroomList, setChatroomList] = useState([]);

    useEffect (()=>{
        PostingService.getChatroom().then((res)=>{
            setChatroomList(res.data)
        })
    },[])


    return (
        <div>
                        <table className="Chatrooms">
                <thead>
                    <tr>
                        <th>채팅방 번호</th>
                        <th>판매자</th>
                        <th>마지막 메세지</th>
                        <th>판매글 제목</th>
                        <th>      </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        chatroomList.map(
                            (chatroom) =>
                                <tr key={chatroom.cht_room_no}>
                                    <td>{chatroom.host_info}</td>
                                    <td>{chatroom.last_cht_msg}</td>
                                    <td>{chatroom.post_name}</td>
                                    <td>{chatroom.post_num}</td>
                                    <td className="manage_button"><button>관리</button></td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GetChatroom;