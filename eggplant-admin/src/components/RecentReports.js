import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const RecentReports = (setNum) => {

    const [reports,setReports] = useState([])
    const [length,setLength] = useState(0)

    useEffect(() => {
        PostingService.getReportList.then((res) => {
            setReports(res.data.slice(0, 3))
            setLength(res.data.length)
            setNum(res.data.length)
        })
    },[])

    return(
        <div className="hom_report">
        <h1> 신고 목록 <span className="big_number">{length}</span></h1>
        <hr />
        <table className="home_lists"><tbody>
            {
                reports.map((it) =>
                    <tr key={it.num}>
                        <td><span className="new_note">NEW</span></td>
                        <td className="home_lists_title">{it.post_num}번 게시글</td>
                        <td>{it.report_date}</td>
                    </tr>
                )
            }
        </tbody></table>
    </div>
    )
}

export default RecentReports;