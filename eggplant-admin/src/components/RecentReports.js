import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const RecentReports = () => {
    const [reportsList, setReportsList] = useState([{
        report_title: "이거 신고되나요??",
        report_date: "오늘"
    }])

    return(
        <div>
        <h1>1:1 문의 <span className="big_number">{reportsList.length}</span></h1>
        <hr />
        <table className="home_lists"><tbody>
            {
                reportsList.map((it) =>
                    <tr>
                        <td><span className="new_note">NEW</span></td>
                        <td>{it.report_title}</td>
                        <td>{it.report_date}</td>
                    </tr>
                )
            }
        </tbody></table>
    </div>
    )
}

export default RecentReports;