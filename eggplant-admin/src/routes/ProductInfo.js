import React, { Componet, useState, useEffect } from 'react';
import GetProductInfo from "../components/GetProductInfo";
import PostingService from '../services/PostingService';
import CreateModel from "../components/CreateModel";
import CreateCategory from "../components/CreateCategory";
import GetPostList from '../components/GetPostsList';

const ProductInfo = () => {

    const [modelformStatus, setModelformStatus] = useState(false)
    const [categoryformStatus, setCategoryformStatus] = useState(false)

    const modelformOpen = () => {
        setModelformStatus(true);
    }

    const categoryformOpen = () => {
        setCategoryformStatus(true);
    }

    const closeCategoryform = () =>{
        setCategoryformStatus(false)
    }

    const closeModelform = () =>{
        setModelformStatus(false)
    }

    return (
        <div className="post_container">
            <div className="header">
            <button onClick={modelformOpen}>모델 등록</button><button onClick={categoryformOpen}>카테고리 등록</button>
                <h1>ProductInfo</h1>
                <hr/>
            </div>
            <div className="body">
                <GetProductInfo />
                {categoryformStatus &&
                    <CreateCategory close={closeCategoryform}/>
                }
                {modelformStatus &&
                    <CreateModel close={closeModelform}/>
                }
            </div>
        </div>
    );
}

export default ProductInfo;