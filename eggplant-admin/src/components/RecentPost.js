import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const RecentPost = (setNum) => {
    const [posts, setPosts] = useState([]);
    const [length, setLength] = useState();

    useEffect(()=>{
        PostingService.getPosts().then((res)=>{
            setPosts(res.data.slice(0, 3))
            setLength(res.data.length)
            setNum(res.data.length)
        })
    },[])

    return (
        <div className="hom_conf">
            <h1>최근 게시글 <span className="big_number">{length}</span></h1>
            <hr />
            <table className="home_lists"><tbody>
                {
                    posts.map((it) =>
                        <tr key={it.post_num}>
                            <td><span className="new_note">NEW</span></td>
                            <td className="home_lists_title">{it.post_title}</td>
                            <td>{it.written_date}</td>
                        </tr>
                    )
                }
            </tbody></table>
        </div>
    )
}

export default RecentPost;