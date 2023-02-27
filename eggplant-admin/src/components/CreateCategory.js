import React, {Componet,useState,useEffect} from 'react';
import PostingService from '../services/PostingService';

const CreateCategory = (categoryList) =>{
    const [category,setCategory] = useState({});

    useEffect(() => {
        setCategory(
            {   category_name : "",
            }
        );
    },[])


    const changeCategoryHandler = (event) => {
        setCategory({category_name : event.target.value})
    }

    const submit = () =>{
        if(categoryList.indexOf(category) < 0){
            PostingService.createCategory(category).then((res) =>{
                this.props.history.push("/productinfo");
            })
        }
    }
    
    return (
        <div>
            카테고리 <input onChange={changeCategoryHandler}/> <br />
            <button onClick={submit}>등록</button>
        </div>
    );
}

export default CreateCategory;