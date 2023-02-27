import axios from 'axios';

const POST_API_BASE_URL = "http://localhost:8080/api/post";

class PostingService {
    getPosts() {
        return axios.get(POST_API_BASE_URL);
    }

    createPost(post) {
        return axios.post(POST_API_BASE_URL, post);
    }

    getCategory(){
        return axios.get("http://localhost:8080/api/category")
    }

    getModel(){
        return axios.get("http://localhost:8080/api/model")
    }

    createCategory(category){
        return axios.post("http://localhost:8080/api/category",category)
    }

    createModel(model){
        return axios.gpostet("http://localhost:8080/api/model",model)
    }
}

export default new PostingService();