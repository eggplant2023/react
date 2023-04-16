import React, { Componet, useState, useEffect } from 'react';
import Pagination from './Pagination';
import PostingService from '../services/PostingService';
import UpdatePost from './UpdatePost';
const GetReprotList = () => {
    const [reportList, setReportList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);
    const [postnum,setPostnum] = useState(0);
    const [postState, setPostState] = useState(false)

    const test = [{
        report_no: 1,
        report_title: "신고합니다",
        user_no: "1",
        updateat: "2020-03-02",
    },
    {
        report_no: 2,
        report_title: "사기 신고합니다;;",
        user_no: "2",
        updateat: "2020-03-02",
    },
    {
        report_no: 3,
        report_title: "사기의심 게시글 신고합니다",
        user_no: "3",
        updateat: "2020-03-02",
    },
    ]

    useEffect(() => {
         PostingService.getReportList().then((res) => {
            setReportList(res.data)
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
                        <th>신고 번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성시간</th>
                        <th>      </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportList.map(
                            (report) =>
                                <tr>
                                    <td>{report.report_num}</td>
                                    <td>{report.report_title}</td>
                                    <td>{report.repoter_num}</td>
                                    <td>{report.report_date}</td>
                                    <td className="manage_button"><button onClick={() => onClickManage(report.report_num)}>관리</button></td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={reportList.length}
                paginate={setCurrentPage}
            />
            {  postState &&
                    <UpdatePost post_num={postnum} closePost={closePost}/>
            }
        </div>
    );
}

export default GetReprotList;