import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import Pagination from './Pagination';
import UpdatePost from './UpdatePost';
import ManageReport from './ManageReport';

const GetReportList = () => {

    const [postList, setPostList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);
    const [postnum,setPostnum] = useState(0);
    const [postState, setPostState] = useState(false);
    const [allPosts, setAllPosts] = useState([]);
    const [reportnum, setReportNum] = useState();
    const setPage = (pageNum) => {
        console.log(`post now page ${pageNum} `)
        let i = (pageNum - 1) * postsPerPage
        setPostList(allPosts.slice(i,i+postsPerPage))
        console.log(postList)
        setCurrentPage(pageNum)
    }

    const openPost = () => {
        setPostState(true)
    }

    const closePost = () => {
        setPostState(false)
    }


    useEffect(() => {
        PostingService.getReportList().then((res) => {
            setAllPosts(res.data)
            console.log(res.data)
            setPostList(res.data.slice(0,postsPerPage))
        }
        )
    }, []);

    const onClickManage = (report_num,post_num) => {
        if(!postState){
            openPost()
            setReportNum(report_num)
            setPostnum(post_num)
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
            <table className="Postings">
                <thead>
                    <tr>
                        <th>신고번호</th>
                        <th>게시글번호</th>
                        <th>신고자</th>
                        <th>신고시간</th>
                        <th>      </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postList.map(
                            (post) =>
                                <tr>
                                    <td>{post.report_num}</td>
                                    <td>{post.post_num}</td>
                                    <td>{post.reporter_num}</td>
                                    <td>{post.report_date}</td>
                                    <td className="manage_button"><button onClick={()=>onClickManage(post.report_num ,post.post_num)}>관리</button></td>
                                </tr>
                        ) 
                    }
                </tbody>
            </table>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={allPosts.length}
                paginate={setPage}
                currentPage={currentPage}
            />
            {  postState &&
                    <ManageReport report_num={reportnum} post_num={postnum} closePost={closePost}/>
            }
        </div>
    );
}

export default GetReportList;