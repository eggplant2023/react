
import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import Today from "../components/Today";
import RecentConfirm from "../components/RecentConfirm";
import RecentQuestions from "../components/RecentQuestions";
import RecentReports from "../components/RecentReports";
import Statistics from "../components/Statistics";
const Home = () => {

    return (
        <div>
            <div className="today_list">
                <Today/>
            </div>
            <div className="question_list">
                <RecentQuestions qnum/>
            </div>
            <div className="reprot_list">
                <RecentReports/>
            </div>
            <div className="confirm_list">
                <RecentConfirm/>
            </div>
            <div className="statistics">
                <Statistics/>
            </div>
        </div>
    )
}

export default Home;