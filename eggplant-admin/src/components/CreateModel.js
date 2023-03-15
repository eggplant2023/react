import React, {Componet,useState,useEffect} from 'react';
import PostingService from '../services/PostingService';

const CreateModel = () =>{
    const [model,setModel] = useState({});

    useEffect(() => {
        setModel(
            {   category_name : "",
                model_name : ""
            }
        );
    },[])

    const changeModelNameHandler = (event) => {
        setModel({...model, model_name : event.target.value})
    }

    const changeCategoryHandler = (event) => {
        setModel({...model, category_name : event.target.value})
    }

    const submit = () =>{
        
            PostingService.createModel(model)
        
    }

    return(
        <div>
            <form>
            카테고리 <input onChange={changeCategoryHandler}/> <br />
            모델명 <input onChange={changeModelNameHandler}/> <br />
            <button onClick={submit}>등록</button>
            </form>
        </div>
    );
}

export default CreateModel;