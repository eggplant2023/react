import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import GetUserInfo from './GetUserInfo';
import Pagination from './Pagination';
const GetUserList = () => {
    const [userList, setUserList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);
    const [usernum, setUsernum] = useState(0);
    const [postState, setPostState] = useState(false);
    const [allUsers, setAllUsers] = useState([]);

    const setPage = (pageNum) => {
        console.log(`post now page ${pageNum} `)
        let i = (pageNum - 1) * postsPerPage
        setUserList(allUsers.slice(i, i + postsPerPage))
        setCurrentPage(pageNum)
    }


    const closePost = () => {
        setPostState(false)
    }

    // const test = [{
    //     uid: 1,
    //     user_name: "김수한무",
    //     id: "kshm966",
    //     nickname: "킹수무한",
    //     createat: "2020-03-02",
    // },
    // {
    //     uid: 1,
    //     user_name: "박수철",
    //     id: "schulPark",
    //     nickname: "박수가이",
    //     createat: "2020-03-02",
    // },
    // {
    //     uid: 1,
    //     user_name: "엄준식",
    //     id: "howumisname",
    //     nickname: "엄...",
    //     createat: "2020-03-02",
    // },
    // ]

    useEffect(() => {
        PostingService.getUserList().then((res) => {
            setAllUsers(res.data)
            console.log(res.data)
            setUserList(res.data.slice(0, postsPerPage))
        })
    }, [])

    const onClickManage = (num) => {
        setUsernum(num);
        setPostState(true);
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
                        <th>유저번호</th>
                        <th>아이디</th>
                        <th>닉네임</th>
                        <th>매너온도</th>
                        <th>가입날짜</th>
                        <th>      </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map(
                            (user) =>
                                <tr>
                                    <td>{user.user_num}</td>
                                    <td>{user.user_acc}</td>
                                    <td>{user.nickname}</td>
                                    <td>{user.temperature}</td>
                                    <td>2023-05-28</td>
                                    <td className="manage_button"><button onClick={() => onClickManage(user.user_num)}>관리</button></td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={allUsers.length}
                paginate={setPage}
                currentPage={currentPage}
            />
            {postState &&
                <GetUserInfo user_num={usernum} closePost={closePost} />
            }
        </div>
    );
}

export default GetUserList;