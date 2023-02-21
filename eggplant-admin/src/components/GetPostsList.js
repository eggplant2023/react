import React, {Componet, useState, useEffect} from 'react';
import PostingService from '../services/PostingService';


const GetPostList = () => {

    const [postList,setPostList] = useState([]);
    const test = [
        {
            post_num: 1,
            post_title: "1번 게시글"
        },
        {
            post_num: 2,
            post_title: "2번 게시글"
        }
    ]
    
    
    useEffect(() => {
        //console.log(PostingService.getPosts);
        
        setPostList(PostingService.getPosts);
        setPostList(test);
    },[]);

    return (
        <div>
              <table className="Postings">
                <thead>
                    <tr>
                        <th>게시글 번호</th>
                        <th>제목</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postList.map(
                            (postList) =>
                            <tr key = {postList.post_num}>
                                <td>{postList.post_num}</td>
                                <td>{postList.post_title}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>  
        </div>
    );
}

export default GetPostList;