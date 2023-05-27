import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const RecentQuestions = ({quests,length}) => {

    return (
        <div className="hom_quest">
            <h1>1:1 문의 <span className="big_number">{length}</span></h1>
            <hr />
            <table className="home_lists"><tbody>
                {
                    quests.map((it) =>
                        <tr>
                            <td key={it.num}><span className="new_note">NEW</span></td>{
                                it.chatroom.last_cht_msg ? 
                                <td className="home_lists_title">{it.chatroom.last_cht_msg}</td> :
                                <td className="home_lists_title">문의드립니다.</td>
                            }
                            <td>{it.last_cht_time}</td>
                        </tr>
                    )
                }
            </tbody></table>
        </div>
    )
}

export default RecentQuestions;