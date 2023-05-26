import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const RecentPost = ({posts, length}) => {


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