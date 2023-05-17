import React, { Componet, useState, useEffect } from 'react';
import GetUserList from '../components/GetUserList';
import PostingService from '../services/PostingService';
import Menu from "../components/Menu"; 
const Users = () => {
    return(
        <>
        <Menu/>
        <div className="post_container">
            <div className="header">
                <h1>회원 관리</h1>
                  
                
            </div>
            <hr />
            <div className="body">

                <GetUserList/>
            </div>
        </div>
        </>
    );
}

export default Users;