
import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import Today from "../components/Today";
import RecentConfirm from "../components/RecentConfirm";
import RecentQuestions from "../components/RecentQuestions";
import RecentReports from "../components/RecentReports";
import Statistics from "../components/Statistics";
const Home = () => {

    const [worknum, setWorknum] = useState(0)
    const [qnum, setQnum] = useState(0)
    const [rnum, setRnum] = useState(0)
    const [cnum, setCnum] = useState(0)
    const [confirmList, setConfirmList] = useState([])
    const [questionList, setQuestionList] = useState([])
    const [reportsList, setReportsList] = useState([])
    const test = [{
        num: 1,
        title: "테스트 타이틀",
        date: "오늘"
    }, {
        num: 2,
        title: "테스트 타이틀",
        date: "오늘"
    }, {
        num: 3,
        title: "테스트 타이틀",
        date: "오늘"
    }]

    useEffect(() => {
        setQnum(test.length)
        setRnum(test.length)
        setCnum(test.length)
        setWorknum(qnum+rnum+cnum)
        setConfirmList(test)
        setQuestionList(test)
        setReportsList(test)
    }, [])



    return (
        <div className="home">
            

                <Today worknum={worknum} qnum={qnum} rnum={rnum} cnum={cnum} />
                <div className="wrap_box">
                <RecentQuestions questionList={questionList} />
                <RecentReports reportsList={reportsList} />
            </div>
            <div className="wrap_box">
                <RecentConfirm confirmList={confirmList} />
                <Statistics />
            </div>
        </div>
    )
}

export default Home;