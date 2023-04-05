import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import Pagination from './Pagination';

const GetUserList = () => {
    const [userList, setUserList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);
    const [postnum,setPostnum] = useState(0);
    // const [chatrommstate, setChatroomstate] = useState(false);
    // const [roomnum, setRoomnum] = useState();

    // const openRoom = () => {
    //     setChatroomstate(true)
    // }

    // const closeRoom = () => {
    //     setChatroomstate(false)
    // }

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };

    const test = [{
        uid: 1,
        user_name: "김수한무",
        id: "kshm966",
        nickname: "킹수무한",
        createat: "2020-03-02",
    },
    {
        uid: 1,
        user_name: "박수철",
        id: "schulPark",
        nickname: "박수가이",
        createat: "2020-03-02",
    },
    {
        uid: 1,
        user_name: "엄준식",
        id: "howumisname",
        nickname: "엄...",
        createat: "2020-03-02",
    },
]

    useEffect(() => {
        // PostingService.getChatroom().then((res) => {
        //     setChatroomList(res.data)
        // })
        setUserList(test)
    }, [])

    const onClickManage = (num) => {
        // if(!chatrommstate){
        //     openRoom()
        //     setRoomnum(num)
        // }
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
            <table className="Postings">
                <thead>
                    <tr>
                        <th>UID</th>
                        <th>이름</th>
                        <th>아이디</th>
                        <th>닉네임</th>
                        <th>가입날짜</th>
                        <th>      </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map(
                            (user) =>
                                <tr>
                                    <td>{user.uid}</td>
                                    <td>{user.user_name}</td>
                                    <td>{user.id}</td>
                                    <td>{user.nickname}</td>
                                    <td>{user.createat}</td>
                                    <td className="manage_button"><button onClick={()=>onClickManage(user.uid)}>관리</button></td>
                                </tr>
                        ) 
                    }
                </tbody>
            </table>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={userList.length}
                paginate={setCurrentPage}
            />
            {/* {  postState &&
                    <UpdatePost post_num={postnum} closePost={closePost}/>
            } */}
        </div>
    );
}

export default GetUserList;