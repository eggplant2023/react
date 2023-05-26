import GetPostList from "../components/GetPostsList";
import CreatePost from "../components/CreatePost";
import React, { useState } from "react";
import Menu from "../components/Menu"; 
import GetHiddenList from "../components/GetHiddenList";

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

            </div>
            <hr />
            <div className="showState">
                {
                    post2show ? 
                    <h1 className = "titleBlack" >공개</h1> :
                    <h1 className = "titleGray" onClick={onClickEx}>공개</h1>
                }
                <h1>&nbsp;||&nbsp;</h1>
                {
                    post2show ? 
                    <h1 className = "titleGray" onClick={onClickHd}>비공개</h1> :
                    <h1 className = "titleBlack">비공개</h1>
                }
            </div>
            <div className="body">

                {
                    post2show ? <GetPostList /> :
                    <GetHiddenList />
                }
                
                
                {postingState &&
                    <CreatePost closePosting={closePosting} />
                }
            </div>
        </div>
        </>
    )
};

export default Posts;