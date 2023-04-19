import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import Pagination from './Pagination';
import UpdatePost from './UpdatePost';
const GetConfirmList = () => {
    const [confirmList, setConfirmList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);
    const [postnum,setPostnum] = useState(0);
    const [postState, setPostState] = useState(false)
    // const [chatrommstate, setChatroomstate] = useState(false);
    // const [roomnum, setRoomnum] = useState();

    // const openRoom = () => {
    //     setChatroomstate(true)
    // }

    // const closeRoom = () => {
    //     setChatroomstate(false)
    // }

    const test = [{
        post_no:1,
        user_no: 1,
        status: "S",
        post_title: "아이폰 팝니당",
        model_name: "iphone XE",
        grade: "A",
        price: 1000000,
        post_content: "ㅍㅍ",
        updateat: "2020-03-02",
    },
    {
        post_no:1,
        user_no: 1,
        status: "S",
        post_title: "나도 파는데요",
        model_name: "iphone XE",
        grade: "A",
        price: 1000000,
        post_content: "ㅍㅍ",
        updateat: "2020-03-02",
    },
    {
        post_no:1,
        user_no: 1,
        status: "S",
        post_title: "최신***아이폰****",
        model_name: "iphone XE",
        grade: "A",
        price: 1000000,
        post_content: "ㅍㅍ",
        updateat: "2020-03-02",
    }
]

    useEffect(() => {
        PostingService.getApprovalList().then((res) => {
            setConfirmList(res.data)
         })
    }, [])

    const onClickManage = (num) => {
         if(!setPostState){
            setPostnum(num)
            setPostState(true)
         }
    }

    const closePost = () => {
        setPostState(false)
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
                        <th>게시글 번호</th>
                        <th>모델명</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성시간</th>
                        <th>      </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        confirmList.map(
                            (post) =>
                                <tr>
                                    <td>{post.post_num}</td>
                                    <td>{post.model_name}</td>
                                    <td>{post.post_title}</td>
                                    <td>{post.nickname}</td>
                                    <td>{post.written_date}</td>
                                    <td className="manage_button"><button onClick={()=>onClickManage(post.post_no)}>관리</button></td>
                                </tr>
                        ) 
                    }
                </tbody>
            </table>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={confirmList.length}
                paginate={setCurrentPage}
            />
            {  postState &&
                    <UpdatePost post_num={postnum} closePost={closePost}/>
            }
        </div>
    );
}

export default GetConfirmList;