import GetPostList from "../components/GetPostsList";
import CreatePost from "../components/CreatePost";
import React, { useState } from "react";
import Menu from "../components/Menu"; 

const Posts = () => {

    const [postingState, setPostingState] = useState(false);
    const [post2show, setPost2show] = useState(true);
    const openPosting = () => {
        setPostingState(true)
    }

    const closePosting = () => {
        setPostingState(false)
    }

    const onClickEx = () => {
        setPost2show(true)
    }

    const onClickHd = () => {
        setPost2show(false)
    }

    return (
        <>
        <Menu/>
        <div className="post_container">
            <div className="header">
            <button id="post_create" onClick={openPosting}>게시글 등록</button>   
                <h1>게시글 관리</h1>
                &nbsp;&nbsp;&nbsp;
                {
                    post2show ? 
                    <h1 className = "titleBlack">공개</h1> :
                    <h1 className = "titleGray">공개</h1>
                }
                &nbsp;||&nbsp;
                {
                    post2show ? 
                    <h1 className = "titleGray">비공개</h1> :
                    <h1 className = "titleBlack">비공개</h1>
                }
            </div>
            <hr />
            <div className="body">

                <GetPostList state={post2show} />
                
                {postingState &&
                    <CreatePost closePosting={closePosting} />
                }
            </div>
        </div>
        </>
    )
};

export default Posts;