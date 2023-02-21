import axios from 'axios';

const POST_API_BASE_URL = "/api/post";

class PostingService {
    getPosts() {
        return axios.get(POST_API_BASE_URL);
    }

    createPost(post) {
        return axios.post(POST_API_BASE_URL, post);
    }
}

export default new PostingService();