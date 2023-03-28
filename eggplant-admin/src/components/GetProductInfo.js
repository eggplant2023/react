import React, {Componet, useState, useEffect} from 'react';
import PostingService from '../services/PostingService';


const GetProductInfo = () => {

    const [models,setModels] = useState([]);
    const [categories,setCategories] = useState([]);


    useEffect(()=>{
        PostingService.getCategory().then((res) => {
                setCategories(res.data)
                console.log(res.data)
            }
        )
        PostingService.getModel().then((res) => {
                setModels(res.data)
                console.log(res.data)
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