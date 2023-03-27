import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import Pagination from './Pagination';
import UpdatePost from './UpdatePost';

const GetPostList = () => {

    const [postList, setPostList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);
    const [postnum,setPostnum] = useState(0);
    const [postState, setPostState] = useState(false);


    const openPost = () => {
        setPostState(true)
    }

    const closePost = () => {
        setPostState(false)
    }


    useEffect(() => {
        PostingService.getPosts().then((res) => {
            setPostList(res.data)
            console.log(res.data)
        }
        )


    }, []);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };

    const onClickManage = (num) => {
        if(!postState){
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
                                <tr key={post.post_no}>
                                    <td>{post.post_no}</td>
                                    <td>{post.model_name}</td>
                                    <td>{post.post_title}</td>
                                    <td>{post.user_no}</td>
                                    <td>{post.updateat}</td>
                                    <td className="manage_button"><button onClick={()=>onClickManage(post.post_no)}>관리</button></td>
                                </tr>
                        ) 
                    }
                </tbody>
            </table>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={postList.length}
                paginate={setCurrentPage}
            />
            {  postState &&
                    <UpdatePost post_num={postnum} closePost={closePost}/>
            }
        </div>
    );
}

export default GetPostList;