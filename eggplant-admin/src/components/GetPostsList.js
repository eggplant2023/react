import React, {Componet, useState, useEffect} from 'react';
import PostingService from '../services/PostingService';


const GetPostList = () => {

    const [postList,setPostList] = useState([]);
    
    const test = [
        {
            post_no: 1,
            post_title : "테스트게시글1"
        },
        {
            post_no: 2,
            post_title : "테스트게시글2"
        }
    ]

    useEffect(() => {
        // PostingService.getPosts().then((res)=> {
        //         setPostList(res.data)
        //         console.log(res.data)
        //     }
        // )
            setPostList(test)
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
                            (post) =>
                            <tr key = {post.post_no}>
                                <td>{post.post_no}</td>
                                <td>{post.post_title}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
                  <form>
                    <select>
                        <option>--정렬--</option>
                        <option>오름차순</option>
                        <option>내림차순</option>
                    </select>
                    <input type = "text"></input>
                    <button>검색</button>
                  </form>
        </div>
    );
}

export default GetPostList;