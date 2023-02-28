import React, {Componet, useState, useEffect} from 'react';
import PostingService from '../services/PostingService';



const GetProductInfo = (modelList, categoryList) => {

    const [models,setModels] = useState([]);
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        PostingService.getCategory().then((res) => {
                modelList = res.data
                setCategories(modelList);
            }
        )
        PostingService.getModel().then((res) => {
                categoryList = res.data;
                setModels(categoryList);
            }
        )
    },[])


    return (
        <div>
              <table className="Models">
                <thead>
                    <tr>
                        <th>카테고리</th>
                        <th>모델</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        models.map(
                            (model) =>
                            <tr key = {model.model_name}>
                                <td>{model.category_name}</td>
                                <td>{model.model_name}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>  
        </div>
    );
}

export default GetProductInfo;