import GetPostList from "./GetPostsList";
import CreatePost from "./CreatePost";
import React, {useState} from "react";

const Posts = () => {
    
    const [postingState, setPostingState] = useState(false);
    const openPosting = () => {
        setPostingState(true)
    }

    const closePosting = () =>{
        setPostingState(false)
    }

    return( 
        <div className="post_container">
            <h1>게시글 관리</h1>
            <hr />
            <GetPostList /> 
            <button onClick={openPosting}>모달 띄우기</button>
            {   postingState && 
                <CreatePost closePosting = {closePosting}/>
            }
        </div>
    )
};

export default Posts;