import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const RecentConfirm = ({confirmList}) => {


    return (
        <div>
            <h1>게시글 승인 <span className="big_number">{confirmList.length}</span></h1>
            <hr />
            <table className="home_lists"><tbody>
                {
                    confirmList.map((it) =>
                        <tr key={it.num}>
                            <td><span className="new_note">NEW</span></td>
                            <td>{it.title}</td>
                            <td>{it.date}</td>
                        </tr>
                    )
                }
            </tbody></table>
        </div>
    )
}

export default RecentConfirm;