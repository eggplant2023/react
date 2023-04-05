
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
    const [reportsList,setReportsList] = useState([])
    const test = [{
        num:1,
        title: "테스트 타이틀",
        date:"오늘"
    }, {
        num:2,
        title: "테스트 타이틀",
        date:"오늘"
    }, {
        num:3,
        title: "테스트 타이틀",
        date:"오늘"
    }]

    useEffect(()=>{
        setQnum(0)
        setRnum(0)
        setCnum(0)
        setConfirmList(test)
        setQuestionList(test)
        setReportsList(test)
    },[])



    return (
        <div>
                {/* <Today className="today_list" worknum={worknum} qnum={qnum} rnum={rnum} cnum={cnum}/>
                <RecentQuestions className="question_list" questionList={questionList}/>
                <RecentReports className="reprot_list" reportsList={reportsList}/>
                <RecentConfirm  className="confirm_list" confirmList={confirmList}/>
                <Statistics  className="statistics"/> */}
        </div>
    )
}

export default Home;