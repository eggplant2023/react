import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const GetUserInfo = ({user_num, closePost}) => {
    const [visitList, setVisitList] = useState([]);
    const [likeList, setLikeList] = useState([]);

    useEffect(() => {
        PostingService.getVisitList(user_num).then((res) => {
            setVisitList(res.data)
            console.log(res.data)
        })

        PostingService.getLikeList(user_num).then((res) => {
            setLikeList(res.data)
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