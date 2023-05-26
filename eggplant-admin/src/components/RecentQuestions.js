import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const RecentQuestions = (setNum) => {

    const [quests,setQuests] = useState([])
    const [length,setLength] = useState(0)

    useEffect(() => {
        PostingService.getAdminChatroom(2).then((res) => {
            setQuests(res.data.slice(0, 3))
            setLength(res.data.length)
            setNum(res.data.length)
        })
    },[])

    return (
        <div className="hom_quest">
            <h1>1:1 문의 <span className="big_number">{length}</span></h1>
            <hr />
            <table className="home_lists"><tbody>
                {
                    quests.map((it) =>
                        <tr>
                            <td key={it.num}><span className="new_note">NEW</span></td>
                            <td className="home_lists_title">{it.chatroom.last_cht_msg}</td>
                            <td>{it.last_cht_time}</td>
                        </tr>
                    )
                }
            </tbody></table>
        </div>
    )
}

export default RecentQuestions;