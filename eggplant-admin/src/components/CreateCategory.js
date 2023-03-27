import React, {Componet,useState,useEffect} from 'react';
import PostingService from '../services/PostingService';

const CreateCategory = ({close}) =>{
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
        
            PostingService.createCategory(category)
        
    }
    
    return (
        <div className="modal">
            <div className="modal_body">
            카테고리 <input onChange={changeCategoryHandler}/> <br />
            <button onClick={submit}>등록</button>
            <button onClick={close}>닫기</button>
            </div>
        </div>
    );
}

export default CreateCategory;