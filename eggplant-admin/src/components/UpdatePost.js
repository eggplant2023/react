import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const UpdatePost = ({post_num, close}) => {
    const [post, setPost] = useState({});
    const [attachment, setAttachment] = useState();

    useEffect(() => {
        PostingService.getSinglePost(post_num).then((res)=>{
            setPost(res.data)
            console.log(res.data)
        })

    }, [])



    return (
        <div className="modal">
            <div className="modal_body">
                <form>
                    <div className="modal-header">
                        <h1>게시글 관리</h1>
                    </div>
                    <hr />
                    <table className="form_table">
                        <tr>
                            <td colspan="2">제목: {post.post_title}</td>
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
                                }} />
                        )
                    }
                    <br />
                    내용
                    <div className="content_area">
                     
                    <div className="content_box">{post.post_content}</div>
                    <br/>
                    <br />
                    </div>

                    <br /><br />
                    <div class="filebox">
                        &nbsp;
                        <button>비공개</button> &nbsp;
                        <button onClick={()=>close}>닫기</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default UpdatePost;