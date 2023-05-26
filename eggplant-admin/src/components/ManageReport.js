import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import GetImageView from './GetImageView';

const ManageReport = ({ report_num, post_num, closePost }) => {
    const [post, setPost] = useState({});
    const [attachment, setAttachment] = useState();
    const [viewStat, setViewStat] = useState(false);
    const [viewSrc, setViewSrc] = useState("")
    const [stat, setStat] = useState(false)

    useEffect(() => {
        PostingService.getSinglePost(post_num, 2).then((res) => {
            setPost(res.data)
            setAttachment(res.data.pictureURL)
            if(res.data.status == "숨김"){
                setStat(true)
            }
        })
    }, [])

    const imgClicked = (e) => {
        console.log(e.target.src)
        setViewSrc(e.target.src)
        setViewStat(true)
    }

    const closeView = () => {
        setViewStat(false)
        setViewSrc("")
    }

    const onHide = () => {
        PostingService.hideReport(report_num).then(res => 
            console.log(res)
        )
    }

    const onExposure = () => {
        PostingService.exposureReport(report_num)
    }

    const onDelete = () => {
        PostingService.deleteReport(report_num)
            console.log("dd")
    }
    return (
        <div className="modal">
            <div className="modal_body">

                    <div className="modal-header">
                        

                        <h1>신고 관리</h1>
                    </div>
                    <hr />
                    <table className="form_table">
                        <tr>
                            <td>제목: {post.post_title}</td>
                            <td>작성자: {post.nickname}</td>
                        </tr>
                        <tr>
                            <td>카테고리: {post.category_name}
                            </td>
                            <td>
                                모델명: {post.model_name}
                            </td>
                        </tr>
                        <tr>
                            <td>등급: {post.grade} <br />
                            </td>
                            <td>가격: {post.price} <br />
                            </td>
                        </tr>
                    </table>

                    {
                        attachment &&
                        attachment.map(
                            (attachment) =>
                            <img src={attachment} style={{
                                backgroundImage: attachment,
                                width: 100,
                                height: 100
                            }}
                            onClick={imgClicked}
                            />
                            )
                        }
                    <br />
                    내용
                    <div className="content_area">

                        <div className="content_box">{post.post_content}</div>
                        <br />
                        <br />
                    </div>

                    <br /><br />
                    <div class="filebox">
                        &nbsp;

                        { stat ?
                            <button onClick={onExposure}>공개</button>
                            :
                            <button onClick={onHide}>비공개</button>
                        }
                        &nbsp;
                        <button onClick={onDelete}>삭제</button>
                        &nbsp;
                        <button onClick={closePost}>닫기</button>
                    </div>
               
                    
                {
                    viewStat && <GetImageView src={viewSrc} closeView={closeView} />
                }
            </div>
        </div>
    );
}

export default ManageReport;