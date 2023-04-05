import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import Pagination from './Pagination';

const GetQuestionList = () => {
    const [questionList, setQuestionList] = useState([]);
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
    const test = [{
        question_no:1,
        question_tite:"판매내역 확인 문의드립니다",
        user_no:1,
        updateat: "2020-03-02",
    },
    {
        question_no:2,
        question_tite:"개인정보 수정 어떻게해야하나요?",
        user_no:1,
        updateat: "2020-03-02",
    },
    {
        question_no:3,
        question_tite:"문의드립니다",
        user_no:1,
        updateat: "2020-03-02",
    },
]

    useEffect(() => {
        // PostingService.getChatroom().then((res) => {
        //     setChatroomList(res.data)
        // })
        setQuestionList(test)
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
                        <th>문의 번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성시간</th>
                        <th>      </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questionList.map(
                            (question) =>
                                <tr>
                                    <td>{question.question_no}</td>
                                    <td>{question.question_tite}</td>
                                    <td>{question.user_no}</td>
                                    <td>{question.updateat}</td>
                                    <td className="manage_button"><button onClick={()=>onClickManage(question.question_no)}>관리</button></td>
                                </tr>
                        ) 
                    }
                </tbody>
            </table>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={questionList.length}
                paginate={setCurrentPage}
            />
            {/* {  postState &&
                    <UpdatePost post_num={postnum} closePost={closePost}/>
            } */}
        </div>
    );
}

export default GetQuestionList;