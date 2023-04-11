import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api";

const FLASK_BASE_URL = "http://localhost:5000";


class PostingService {
    getPosts() {
        return axios.get(API_BASE_URL+"/post");
    }

    createPost(post) {
        return axios.post(API_BASE_URL+"/post", post,{
            headers: {
                "Contest-Type": "multipart/form-data"
            }
        });
    }

    getCategory(){
        return axios.get(API_BASE_URL+"/category")
    }

    getModel(){
        return axios.get(API_BASE_URL+"/model")
    }

    createCategory(category){
        return axios.post(API_BASE_URL+"/category",category)
    }

    createModel(model){
        return axios.post(API_BASE_URL+"/model",model)
    }

    getChatroom(){
        return axios.get(API_BASE_URL+"/chattingroom")
    }

    getSinglePost(num){
        return axios.get(API_BASE_URL+"/post/"+num)
    }

    getCategoriesModel(category){
        return axios.get(API_BASE_URL+"/"+category+"/model")
    }

    getChatList(roomnumber){
        return axios.get(API_BASE_URL+"/chatting/"+roomnumber)
    }

    getCategoryClassfy(data){
        return axios.post(FLASK_BASE_URL+"/predict",data,{
            headers: {
                "Contest-Type": "multipart/form-data"
            }
        })
    }

    getModelClassify(data){
        return axios.post(FLASK_BASE_URL+"/predict/smartphone",data,{
            headers: {
                "Contest-Type": "multipart/form-data"
            }
        })
    }
}

export default new PostingService();