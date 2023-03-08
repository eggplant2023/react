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
        <div>
            <div className="post_header">
            </div>
        <div className="post_container">
            <h1>Posts</h1>
            <GetPostList /> 
            <button onClick={openPosting}>모달 띄우기</button>
            {   postingState && 
                <CreatePost closePosting = {closePosting}/>
            }
        </div>
        </div>
    )
};

export default Posts;