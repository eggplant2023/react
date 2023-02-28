import GetPostList from "./GetPostsList";
import Posting from "./Posting";
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
            <h1>Posts</h1>
            <GetPostList /> 
            <button onClick={openPosting}>모달 띄우기</button>
            {   postingState && 
                <Posting closePosting = {closePosting}/>
            }
        </div>
    )
};

export default Posts;