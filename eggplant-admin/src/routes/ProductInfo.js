import React, {Componet, useState, useEffect} from 'react';
import GetProductInfo from "../components/GetProductInfo";
import PostingService from '../services/PostingService';
import CreateModel from "../components/CreateModel";
import CreateCategory from "../components/CreateCategory";
import GetPostList from '../components/GetPostsList';

const ProductInfo = () => {
    
    const [modelformStatus, setModelformStatus] = useState(false)
    const [categoryformStatus, setCategoryformStatus] = useState(false)
    
    useEffect(()=>{
        PostingService.getCategory().then((res) => {

            }
        )
        PostingService.getModel().then((res) => {

            }
        )
    },[])

    const modelformOpen = () => {
        setModelformStatus(true);
    }

    const categortformOpen = () => {
        setCategoryformStatus(true);
    }
    
    

    return (
    <div>
        <h1>ProductInfo</h1>
        <GetProductInfo />
        <button onClick={categortformOpen}>카테고리 등록</button>
    {   categoryformStatus && 
        <CreateCategory />
    }

    <button onClick={modelformOpen}>모델 등록</button>
    {   modelformStatus && 
        <CreateModel />
    }
    </div>
    );
}

export default ProductInfo;