import axios from 'axios';

const API_BASE_URL = "http://52.78.130.186/:8080/api";

class PostingService {
    getPosts() {
        return axios.get(API_BASE_URL+"/post");
    }

    createPost(post) {
        return axios.post(API_BASE_URL+"/post", post);
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
}

export default new PostingService();