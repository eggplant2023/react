import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const GetUserInfo = ({user_num, closePost}) => {
    const [info,setInfo] = useState()

    useEffect(() => {

        PostingService.getUserInfo(user_num).then((res) => {
            console.log(res.data)
        })


    }, [])

    return (
        <div className="modal">
            <div className='modal_body'>
                <div className="modal-header">
                    <h1>유저 정보</h1>
                </div>
                <hr /> 

            <button onClick={closePost}> 닫기 </button>
            </div>
        </div>
    );
}

export default GetUserInfo;