import React, {Componet, useState, useEffect} from 'react';
import GetProductInfo from "./GetProductInfo";
import PostingService from '../services/PostingService';
import CreateModel from "./CreateModel";
import CreateCategory from "./CreateCategory";

const ProductInfo = () => {

    const [categoryList,setCategoryList] = useState([]);
    const [modelList,setModelList] = useState([]);

    const [modelformStatus, setModelformStatus] = useState(false);
    const [categoryformStatus, setCategoryformStatus] = useState(false)


    const modelformOpen = () => {
        setModelformStatus(true);
    }

    const categortformOpen = () => {
        setCategoryformStatus(true);
    }
    
    useEffect(() => {
        PostingService.getCategory().then((res) => 
            setCategoryList(res.data)
        )
        PostingService.getModel().then((res)=> 
            setModelList(res.data)
        )
    },[]);

    return (
    <div>
        <h1>ProductInfo</h1>
        <GetProductInfo modelList = {modelList}/> 

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