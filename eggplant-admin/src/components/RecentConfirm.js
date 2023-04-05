import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const RecentConfirm = () => {
    const [confirmList, setConfirmList] = useState([{
        conf_title: "갤럭시 z플립 팝니다",
        conf_date: "오늘"
    }, {
        conf_title: "갤럭시 zz플립플립 팝니다",
        conf_date: "오늘"
    }])

    const test = [{
        conf_title: "갤럭시 z플립 팝니다",
        conf_date: "오늘"
    }, {
        conf_title: "갤럭시 zz플립플립 팝니다",
        conf_date: "오늘"
    }]


    return (
        <div>
            <h1>게시글 승인 <span className="big_number">{confirmList.length}</span></h1>
            <hr />
            <table className="home_lists"><tbody>
                {
                    confirmList.map((it) =>
                        <tr>
                            <td><span className="new_note">NEW</span></td>
                            <td>{it.conf_title}</td>
                            <td>{it.conf_date}</td>
                        </tr>
                    )
                }
            </tbody></table>
        </div>
    )
}

export default RecentConfirm;