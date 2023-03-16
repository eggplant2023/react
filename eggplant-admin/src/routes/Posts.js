import GetPostList from "../components/GetPostsList";
import CreatePost from "../components/CreatePost";
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
            <button onClick={openPosting}>게시글 등록</button>
            {   postingState && 
                <CreatePost closePosting = {closePosting}/>
            }
        </div>
    )
};

export default Posts;