import React, {Componet,useState,useEffect} from 'react';
import PostingService from '../services/PostingService';

const CreateModel = (modelList, categoryList) =>{
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
        if(modelList.indexOf(model) < 0){
            PostingService.createModel(model).then((res) =>{
                this.props.history.push("/productinfo");
            })
        }
    }

    return(
        <div>
            
        </div>
    );
}

export default CreateModel;