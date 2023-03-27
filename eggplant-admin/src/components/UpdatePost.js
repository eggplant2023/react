import React, { Componet, useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const UpdatePost = ({post_num, closePost}) => {
    const [post, setPost] = useState({});
    const [attachment, setAttachment] = useState();
    const [images, setImages] = useState([]);
    const formData = new FormData();
    
    useEffect(() => {
        PostingService.getSinglePost(post_num).then((res)=>{
            setPost(res.data)
        })
    }, []);

    const submit = () => {
        console.log(images)
        formData.append('post', new Blob([JSON.stringify(post)], {
            type: "application/json"
        }))
        if (images) {
            const imageLists = images

            for (let i = 0; i < imageLists.length; i++) {
                formData.append("files", imageLists[i])
            }
        }
        console.log(formData.get("files"))
        console.log(formData.get("post"))
        PostingService.createPost(formData)
    }

    const changeTitleHandler = (event) => {
        setPost({ ...post, post_title: event.target.value })
    }

    const changeModelNameHandler = (event) => {
        setPost({ ...post, model_name: event.target.value })
    }

    const changeGradeHandler = (event) => {
        setPost({ ...post, grade: event.target.value })
    }

    const changePriceHandler = (event) => {
        setPost({ ...post, price: event.target.value })
    }

    const changePostContentHandler = (event) => {
        setPost({ ...post, post_content: event.target.value })
    }

    const onFileChange = (event) => {
        const imageLists = event.target.files
        setImages(imageLists)
        let imageUrlLists = []

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i])
            imageUrlLists.push(currentImageUrl);
        }
        setAttachment(imageUrlLists)
        console.log(imageLists)
        console.log(images)
    };

    return (
        <div className="modal">
            <div className="modal_body">
                <form>
                    <h1>게시글 관리</h1>
                    <hr />
                    제목 <input type="text" onChange={changeTitleHandler} /> <br />
                    등급 <input type="text" onChange={changeGradeHandler} /> <br />
                    가격 <input type="number" onChange={changePriceHandler} /> <br />
                    내용 <input type="textarea" className="conent_box" onChange={changePostContentHandler} /> <br />
                    <br />
                    {
                        attachment &&
                        attachment.map(
                            (attachment) =>
                                <img src={attachment} style={{
                                    backgroundImage: attachment,
                                }} />
                        )
                    }
                    <br/><br/>
                    <div class="filebox">
                        <label for="attach-file">파일찾기</label>
                        <input id="attach-file"
                            type="file"
                            accept="image/*"
                            onChange={onFileChange}
                            multiple="multiple"
                        />
                    </div>
                    <br />
                    <button onClick={submit}>등록</button>
                    <button onClick={closePost}>닫기</button>
                </form>
            </div>
        </div>
    );
}

export default UpdatePost;