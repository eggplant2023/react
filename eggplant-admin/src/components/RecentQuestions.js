import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const RecentQuestions = () => {
    const [questionList, setQuestionList] = useState([{
        quest_title: "문의드립ㄴ디ㅏ",
        quest_date: "오늘"
    }])

    return (
        <div>
            <h1>1:1 문의 <span className="big_number">{questionList.length}</span></h1>
            <hr />
            <table className="home_lists"><tbody>
                {
                    questionList.map((it) =>
                        <tr>
                            <td><span className="new_note">NEW</span></td>
                            <td>{it.quest_title}</td>
                            <td>{it.quest_date}</td>
                        </tr>
                    )
                }
            </tbody></table>
        </div>
    )
}

export default RecentQuestions;