import GetPostList from "../components/GetPostsList";
import CreatePost from "../components/CreatePost";
import React, { useState } from "react";

const Posts = () => {

    const [postingState, setPostingState] = useState(false);
    const openPosting = () => {
        setPostingState(true)
    }

    const closePosting = () => {
        setPostingState(false)
    }

    return (
        <div className="post_container">
            <div className="header">
            <button id="post_create" onClick={openPosting}>게시글 등록</button>   
                <h1>게시글 관리</h1>
                  
                
            </div>
            <hr />
            <div className="body">

                <GetPostList />
                
                {postingState &&
                    <CreatePost closePosting={closePosting} />
                }
            </div>
        </div>
    )
};

export default Posts;