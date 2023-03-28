import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';

const CreatePost = ({ closePosting }) => {
    const [post, setPost] = useState({});
    const [attachment, setAttachment] = useState();
    const [images, setImages] = useState([]);
    const formData = new FormData();

    const [categories, setCategories] = useState([]);
    const [models, setModels] = useState([]);

    const [category, setCategory] = useState("");
    useEffect(() => {
        setPost(
            {
                user_no: 1,
                status: "S",
                post_title: "",
                model_name: "iphone XE",
                grade: "",
                price: 0,
                post_content: "",
            }
        )

        PostingService.getCategory().then((res) => { setCategories(res.data) })
        setModels({model_name:"먼저 카테고리를 선택하세요"})
    }, [])

    useEffect(()=>{
        PostingService.getCategoriesModel(category).then((res) => (setModels(res.data)))
    },[category])

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

    const changeCategoryHandler = (event) => {
        for(c in categories){
            if (event.target.value == c.category_name){
                setCategory(event.target.value)
            }
        }
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
                    <div className="modal-header">
                        <h1>게시글 등록</h1>
                    </div>
                    <hr />
                    <table className="form_table">
                        <tr>
                            <td colspan="2">제목 <input type="text" className="form_title" onChange={changeTitleHandler} /></td>
                        </tr>
                        <tr>
                            <td>카테고리 <input className="form_category" type="text" list="category" onChange={changeCategoryHandler}></input><datalist id="category">
                                {
                                    categories.map((category) =>
                                        <option>{category.category_name}</option>
                                    )
                                }
                            </datalist>
                            </td>
                            <td>
                                모델명 <input type="text" className="form_model" list="model" onChange={changeModelNameHandler}></input><datalist id="model">
                                    {
                                        models.map((model) =>
                                            <option>{model.model_name}</option>
                                        )
                                    }
                                </datalist>
                            </td>
                        </tr>
                        <tr>
                            <td>등급 <input type="text" classNmae="form_grade" onChange={changeGradeHandler} /> <br />
                            </td>
                            <td>가격 <input type="number" classNmae="form_price" onChange={changePriceHandler} /> <br />
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
                    <div className="content_area">
                    내용 
                    <br/>
                    <input type="textarea" className="form_content" onChange={changePostContentHandler} /> <br />
                    </div>

                    <br /><br />
                    <div class="filebox">
                        <label for="attach-file">파일찾기</label>
                        <input id="attach-file"
                            type="file"
                            accept="image/*"
                            onChange={onFileChange}
                            multiple="multiple"
                        />
                        <button onClick={submit}>등록</button>
                        <button onClick={()=>closePosting}>닫기</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default CreatePost;