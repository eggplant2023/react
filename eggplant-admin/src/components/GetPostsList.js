import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import Pagination from './Pagination';
import UpdatePost from './UpdatePost';

const GetPostList = () => {

    const [postList, setPostList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);
    const [postnum, setPostnum] = useState(0);
    const [postState, setPostState] = useState(false);
    const [allPosts, setAllPosts] = useState([]);
    const [exPost, setExPost] = useState([]);
    const [hdPost, setHdPost] = useState([]);

    const setPage = (pageNum) => {
        console.log(`post now page ${pageNum} `)
        let i = (pageNum - 1) * postsPerPage
        setPostList(allPosts.slice(i, i + postsPerPage))
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


            PostingService.getPosts().then((res) => {
                setAllPosts(res.data)
                console.log(res.data)
                setPostList(res.data.slice(0, postsPerPage))
            })

    }, []);


    const onClickManage = (num) => {
        if (!postState) {
            openPost()
            setPostnum(num)
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
                <br/>
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
                        postList.map(
                            (post) =>
                                <tr>
                                    <td>{post.post_num}</td>
                                    <td>{post.model_name}</td>
                                    <td>{post.post_title}</td>
                                    <td>{post.nickname}</td>
                                    <td>{post.written_date}</td>
                                    <td className="manage_button"><button onClick={() => onClickManage(post.post_num)}>관리</button></td>
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
            {postState &&
                <UpdatePost post_num={postnum} closePost={closePost} />
            }
        </div>
    );
}

export default GetPostList;