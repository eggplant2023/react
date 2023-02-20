import styles from '../css/Posting.css';
import React, {Componet,useState,useEffect} from 'react';
import PostingService from '../services/PostingService';

const Posting = ({closePosting}) => {
    const [post,setPost] = useState({});
    
    useEffect(() => {
        setPost(
            {   user_no: 1,
                status: false,
                post_title: "",
                model_name: "",
                grade: "",
                price: "",
                post_content: ""
            }
        );
    },[])

    //status 타입 물어봐야함 ㅇㅇ

    const submit = () => {
        
        console.log(post);
        closePosting();
    }

    const changeTitleHandler = (event) => {
        setPost({...post, post_title: event.target.value})
    }

    const changeModelNameHandler = (event) => {
        setPost({...post, model_name: event.target.value})
    }

    const changeGradeHandler = (event) => {
        setPost({...post, grade: event.target.value})
    }

    const changePriceHandler = (event) => {
        setPost({...post, price: event.target.value})
    }

    const changePostContentHandler = (event) => {
        setPost({...post, post_content: event.target.value})
    }
    return(
        <div>
            <form>
            제목 <input onChange={changeTitleHandler}/> <br />
            모델명 <input onChange={changeModelNameHandler} /> <br />
            등급 <input onChange={changeGradeHandler}/> <br />
            가격 <input onChange={changePriceHandler} /> <br />
            내용 <input onChange={changePostContentHandler} /> <br />
            <button onClick={submit}>등록</button>
            <button onClick={closePosting}>닫기</button>
            </form>
        </div>
    );
}

export default Posting;