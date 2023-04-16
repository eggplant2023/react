import React, { Componet, useState, useEffect } from 'react';
import GetProductInfo from "../components/GetProductInfo";
import PostingService from '../services/PostingService';

const Classfy = () => {

    const [classRes, SetClassRes] = useState(false)
    const [attachment, setAttachment] = useState();
    const [images, setImages] = useState([]);
    const [resCategory, setResCategory] = useState({});
    const [resModel, setResModel] = useState({});


    const getCategory = () => {
        const formData = new FormData();
        if (images) {
            const imageLists = images

            for (let i = 0; i < imageLists.length; i++) {
                formData.append("files", imageLists[i])
            }
        }
        PostingService.getCategoryClasify(formData).then(
            (res)=>
            setResCategory(res.data)
        )
    }

    const getModel = () => {
        const formData = new FormData();
        if (images) {
            const imageLists = images

            for (let i = 0; i < imageLists.length; i++) {
                formData.append("files", imageLists[i])
            }
        }
        
        PostingService.getModelClassify(formData).then(
            (res)=>
            setResModel(res.data)
        )
    }


    const onFileChange = (event) => {
        const imageLists = event.target.files
        console.log(event.target.fi)
        setImages(imageLists)
        let imageUrlLists = []

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i])
            imageUrlLists.push(currentImageUrl);
        }
        setAttachment(imageUrlLists)

    };

    const reset = () => {
        setAttachment([])
        setImages([])
    }

    return (
        <div className="post_container">
            <div className="header">
                <h1>분류 확인</h1>
                <hr />
            </div>
            <div className="body">
                <div clssName="class_view">
                {
                    attachment &&
                    attachment.map(
                        (attachment) =>
                            <img className="class_img" src={attachment} />
                    )
                }
                </div>
                <div class="filebox">
                    <label for="attach-file">파일찾기</label>
                    <input id="attach-file"
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                        multiple="multiple"
                    />
                        <button onClick={reset}>취소</button>
                </div>

                <button onClick={getCategory}>카테고리 분석</button> <button onClick={getModel}>모델 분석</button>
                <br />
                {
                    resCategory && <h3>카테고리: {resCategory.answer} 확률:{resCategory.percent}</h3>
                }
                {
                    resCategory && <h3>모델: {resModel.answer} 확률:{resModel.percent}</h3>
                }
            </div>
        </div>
    );
}

export default Classfy;