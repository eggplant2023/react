import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const RecentQuestions = ({questionList}) => {

    return (
        <div>
            <h1>1:1 문의 <span className="big_number">{questionList.length}</span></h1>
            <hr />
            <table className="home_lists"><tbody>
                {
                    questionList.map((it) =>
                        <tr>
                            <td key={it.num}><span className="new_note">NEW</span></td>
                            <td>{it.title}</td>
                            <td>{it.date}</td>
                        </tr>
                    )
                }
            </tbody></table>
        </div>
    )
}

export default RecentQuestions;