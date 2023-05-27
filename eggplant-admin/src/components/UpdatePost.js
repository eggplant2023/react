import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import GetImageView from './GetImageView';

const UpdatePost = ({ post_num, closePost }) => {
    const [post, setPost] = useState({});
    const [attachment, setAttachment] = useState();
    const [viewStat, setViewStat] = useState(false);
    const [viewSrc, setViewSrc] = useState("")
    const [stat, setStat] = useState(false)
    useEffect(() => {

        PostingService.getSinglePost(post_num, 2).then((res) => {
            setPost(res.data)
            setAttachment(res.data.pictureURL)
            if (res.data.status == "숨김") {
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
        PostingService.hidePost(post_num).then(res =>
            console.log(res)
        )
    }

    const onExposure = () => {
        PostingService.exposurePost(post_num)
    }

    const onDelete = () => {
        PostingService.deletePost(post_num)
        console.log("dd")
    }
    return (
        <div className="modal">
            <div className="modal_body">

                <div className="modal-header">


                    <h1>게시글 관리</h1>
                    <button className="clase" onClick={closePost}>닫기</button>
                </div>
                <hr />
                {/* <table className="form_table">
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
                    </table> */}


                {
                    attachment &&
                    attachment.map(
                        (attachment) =>
                            <img src={attachment} style={{
                                backgroundImage: attachment,
                                width: "500px",
                                height: "auto"
                            }}
                                onClick={imgClicked}
                            />
                    )
                }


                <div className="madal_userinfo">
                    <img src={post.profile_image} className="modal_profileImg" />
                    <h2 className="modal_nickname">{post.nickname}<br />
                        <h3 className="modal_status">{post.status}</h3></h2>
                    <div class="modal_control">
                        <form>
                            {stat ?
                                <button onClick={onExposure}>공개</button>
                                :
                                <button onClick={onHide}>비공개</button>
                            }
                            &nbsp;
                            <button onClick={onDelete}>삭제</button>
                            &nbsp;
                        </form>
                    </div>

                    <br />
                    <br />
                    내용
                    <div className="content_area">

                        <div className="content_box">{post.post_content}</div>


                    </div>
                    <br />
                    <div className="modal_exInfo">가격: {post.price}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        평균거래가: {post.fairPrice}</div>
                </div>


                {
                    viewStat && <GetImageView src={viewSrc} closeView={closeView} />
                }
            </div>
        </div>
    );
}

export default UpdatePost;