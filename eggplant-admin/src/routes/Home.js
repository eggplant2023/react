
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
    const [reports, setReports] = useState([]);
    const [posts, setPosts] = useState([]);
    const [quests, setQuests] = useState([]);

    const getQuestions = PostingService.getAdminChatroom(71).then((res) => {
        setQuests(res.data.slice(0, 3))
        setQnum(res.data.length)
    })

    const getReports = PostingService.getReportList().then((res) => {
        setReports(res.data.slice(0, 3))
        setRnum(res.data.length)
    })

    const getPosts = PostingService.getTodaysPost().then((res) => {
        setPosts(res.data.slice(0, 3))
        setPnum(res.data.length)
        setWorknum(qnum + rnum + pnum)
    })


    const getall = PostingService.getAdminChatroom(71).then((res) => {
        setQuests(res.data.slice(0, 3))
        setQnum(res.data.length)
    }).then(PostingService.getReportList().then((res) => {
        setReports(res.data.slice(0, 3))
        setRnum(res.data.length)
    })).then(PostingService.getTodaysPost().then((res) => {
        setPosts(res.data.slice(0, 3))
        setPnum(res.data.length)
        setWorknum(qnum + rnum + pnum)
    }))

    useEffect(() => {
        getall();
    }, [])


    return (
        <>
            <Menu />
            <div className="home">
                <Today worknum={worknum} qnum={qnum} rnum={rnum} pnum={pnum} />
                <div className="wrap_box">
                    <RecentQuestions setQuests={setQuests} quests={quests} length={qnum} />
                    <RecentReports reports={reports} length={rnum} />
                </div>
                <div className="wrap_box">
                    <RecentPost posts={posts} length={pnum} />
                    <Statistics />
                </div>
            </div>
        </>
    )
}

export default Home;