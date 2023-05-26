
import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import Today from "../components/Today";
import RecentConfirm from "../components/RecentConfirm";
import RecentQuestions from "../components/RecentQuestions";
import RecentReports from "../components/RecentReports";
import Statistics from "../components/Statistics";
import Menu from "../components/Menu"; 
import RecentPost from '../components/RecentPost';

const Home = () => {

    const [worknum, setWorknum] = useState(0);
    const [qnum, setQnum] = useState(0);
    const [rnum, setRnum] = useState(0);
    const [pnum, setPnum] = useState(0);

    useEffect(()=>{setWorknum(qnum+rnum+pnum)})

    return (
        <>
        <Menu />
        <div className="home">
                <Today worknum={worknum} qnum={qnum} rnum={rnum} pnum={pnum} />
                <div className="wrap_box">
                <RecentQuestions setNum={setQnum} />
                <RecentReports setNum={setRnum} />
            </div>
            <div className="wrap_box">
                <RecentPost setNum = {setPnum}/>
                <Statistics />
            </div>
        </div>
        </>
    )
}

export default Home;