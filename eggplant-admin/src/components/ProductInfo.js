import React, {Componet, useState, useEffect} from 'react';
import GetProductInfo from "./GetProductInfo";
import PostingService from '../services/PostingService';
import CreateModel from "./CreateModel";
import CreateCategory from "./CreateCategory";
import GetPostList from './GetPostsList';

const ProductInfo = () => {
    
    const [modelformStatus, setModelformStatus] = useState(false)
    const [categoryformStatus, setCategoryformStatus] = useState(false)

    var categoryList;
    var modelList;

    
    const modelformOpen = () => {
        setModelformStatus(true);
    }

    const categortformOpen = () => {
        setCategoryformStatus(true);
    }
    
    
    return (
    <div>
        <h1>ProductInfo</h1>
        <GetProductInfo modelList = {modelList} categoryList = {categoryList}/>
        <button onClick={categortformOpen}>카테고리 등록</button>
    {   categoryformStatus && 
        <CreateCategory categoryList = {categoryList}/>
    }

    <button onClick={modelformOpen}>모델 등록</button>
    {   modelformStatus && 
        <CreateModel modelList = {modelList}/>
    }
    </div>
    );
}

export default ProductInfo;