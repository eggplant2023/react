import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const RecentReports = ({reportsList}) => {

    return(
        <div>
        <h1>1:1 문의 <span className="big_number">{reportsList.length}</span></h1>
        <hr />
        <table className="home_lists"><tbody>
            {
                reportsList.map((it) =>
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

export default RecentReports;