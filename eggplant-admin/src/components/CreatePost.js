import React, {Componet,useState,useEffect} from 'react';
import PostingService from '../services/PostingService';

const CreatePost = ({closePosting}) => {
    const [post,setPost] = useState({});
    const [attachment,setAttachment] = useState();
    const [images,setImages] = useState();
    const formData = new FormData();

    useEffect(() => {
        setPost(
            {  user_no: 1,
                status: "S",
                post_title: "",
                model_name: "iphone XE",
                grade: "",
                price: 0,
                post_content: "",
            }
        )
    },[])

    const submit = () => {

        formData.append('post', new Blob([JSON.stringify(post)], {
            type: "application/json"
        }))
        if(images){
            const imageLists = images
        
            for (let i = 0; i < imageLists.length; i++) {
                formData.append("files",imageLists[i])
          }
        }
        console.log(formData.get("files"))
        console.log(formData.get("post"))
        PostingService.createPost(formData)
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

    const onFileChange = (event) => {
        setImages(event.target.files)
        const imageLists = event.target.files
        let imageUrlLists = []
        
        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i])
            imageUrlLists.push(currentImageUrl);
          }
        setAttachment(imageUrlLists)
      };

    return(
        <div>
            <form>
            <br/>
            제목 <input onChange={changeTitleHandler}/> <br />
            { 
                attachment &&
                attachment.map(
                (attachment) =>
                <img src={attachment} style={{
                    backgroundImage: attachment,
                    width: 100,
                    height: 100
                  }}/>
            )
            }<br/>
            등급 <input onChange={changeGradeHandler}/> <br />
            가격 <input type="number" onChange={changePriceHandler} /> <br />
            내용 <input onChange={changePostContentHandler} /> <br />
            <input id="attach-file"
            type="file"
            accept="image/*"
            onChange={onFileChange}
            multiple="multiple"
            />
            <br/>
            <button onClick={submit}>등록</button>
            <button onClick={closePosting}>닫기</button>
            </form>
        </div>
    );
}

export default CreatePost;