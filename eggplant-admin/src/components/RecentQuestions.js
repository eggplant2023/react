import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const RecentQuestions = ({setQuests,quests,length}) => {

    var Q = [];

    useEffect(()=>{
        for (let i=0; i<quests.length;i++){
            if(quests.last_cht_msg == null){
                Q[i] = {
                    num: quests[i].num,
                    last_cht_msg: "문의드립니다",
                    last_cht_time: " "
                     }
            }
            else{
                Q[i] = quests[i]
            }
        }
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
                                <td className="home_lists_title">{it.last_cht_msg}</td> :
                            <td>{it.last_cht_time}</td>
                        </tr>
                    )
                }
            </tbody></table>
        </div>
    )
}

export default RecentQuestions;