import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const Today = () => {

    const [worknum, setWorknum] = useState(0)
    const [qnum, setQnum] = useState(0)
    const [rnum, setRnum] = useState(0)
    const [cnum, setCnum] = useState(0)

    useEffect = (() => {
        //대충 할일 갯수 받아오는 부분 필요
        setWorknum(qnum + rnum + cnum)
    }, [])

    return (
        <div>
            <h1>오늘의 할 일 <span className="big_number">{worknum}</span></h1>
            <hr/>
            <table className="today_table">
                <tbody>
                    <tr><td>1:1 문의<span className="small_number">{qnum}</span></td>
                        <td>신고 목록<span className="small_number">{rnum}</span></td>
                        <td>게시 승인<span className="small_number">{cnum}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Today;