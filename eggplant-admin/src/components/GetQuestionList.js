import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import GetChatList from './GetChatList';
import Pagination from './Pagination';
const GetChatroom = () => {
    const [chatroomList, setChatroomList] = useState([]);
    const [chatrommstate, setChatroomstate] = useState(false);
    const [roomnum, setRoomnum] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);
    const [allRooms, setAllRooms] = useState([]);


    const setPage = (pageNum) => {
        console.log(`post now page ${pageNum} `)
        let i = (pageNum - 1) * postsPerPage
        setChatroomList(allRooms.slice(i, i + postsPerPage))
        setCurrentPage(pageNum)
    }

    const openRoom = () => {
        setChatroomstate(true)
    }
    const closeRoom = () => {
        setChatroomstate(false)
    }

    useEffect(() => {
        PostingService.getChatroom().then((res) => {
            setAllRooms(res.data)
            setChatroomList(res.data.slice(0, postsPerPage))
        })
    }, [])

    const onClickManage = (num) => {
        if (!chatrommstate) {
            openRoom()
            setRoomnum(num)
        }
    }


    return (
        <div>
            <div id="postList_form">
                <form>
                    <select>
                        <option>--정렬--</option>
                        <option>오름차순</option>
                        <option>내림차순</option>
                    </select>
                    <input type="text"></input>
                    <button>검색</button>
                </form>
            </div>
            <table className="Chatrooms">
                <thead>
                    <tr>
                        <th>채팅방 번호</th>
                        <th>문의자</th>
                        <th>마지막 문의</th>
                        <th>마지막 작성시간</th>
                        <th>제목</th>
                        <th>      </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        chatroomList.map(
                            (chatroom) =>
                                <tr key={chatroom.cht_room_no}>
                                    <td>{chatroom.cht_room_no}</td>
                                    <td>{chatroom.host_info}</td>
                                    <td>{chatroom.last_cht_msg}</td>
                                    <td>{chatroom.last_cht_time}</td>
                                    <td>{chatroom.post_name}</td>
                                    <td className="manage_button"><button onClick={() => onClickManage(chatroom.cht_room_no)}>관리</button></td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            {
                chatrommstate &&
                <GetChatList close={closeRoom} roomnumber={roomnum} />
            }

            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={allRooms.length}
                paginate={setPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default GetChatroom;