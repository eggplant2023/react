import React, { useState } from "react";
import GetReprotList from "../components/GetReportList";
const Reports = () => {
    return(
        <div className="post_container">
            <div className="header">
                <h1>신고 목록</h1>
            </div>
            <hr />
            <div className="body">
                <GetReprotList/>
            </div>
        </div>
    );
}

export default Reports;