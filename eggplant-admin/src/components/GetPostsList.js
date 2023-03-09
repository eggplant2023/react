import React, {Componet, useState, useEffect} from 'react';
import PostingService from '../services/PostingService';


const GetPostList = () => {

    const [postList,setPostList] = useState([]);
    
    
    useEffect(() => {
        PostingService.getPosts().then((res)=> {
                setPostList(res.data)
                console.log(res.data)
            }
        )
        
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
                        /*postList.map(
                            (post) =>
                            <tr key = {post.post_no}>
                                <td>{post.post_no}</td>
                                <td>{post.post_title}</td>
                            </tr>
                        )*/
                    }
                </tbody>
                </table>  
        </div>
    );
}

export default GetPostList;