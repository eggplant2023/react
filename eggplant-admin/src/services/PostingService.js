import axios from 'axios';


const server_ipv4 = "http://52.78.130.186";

//const API_BASE_URL = "http://localhost:8080/api";
const API_BASE_URL = server_ipv4 + ":8080/api";

const FLASK_BASE_URL = "http://localhost:5000";
//const FLASK_BASE_URL = server_ipv4 + ":5000";

class PostingService {
    getPosts() {
        return axios.get(API_BASE_URL+"/post");
    }

    createPost(post) {
        return axios.post(API_BASE_URL+"/post", post,{
            headers: {
                "Content-Type": "multipart/form-data"
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

    getCategoryClassify(data){
        return axios.post(FLASK_BASE_URL+"/predict",data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    getModelClassify(data){
        return axios.post(FLASK_BASE_URL+"/predict/smartphone",data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    hidePost(report_num){
        return axios.get(API_BASE_URL+`/report/${report_num}/hide`)
    }
    getReportList(){
        return axios.get(API_BASE_URL+"/report")
    }
    exposurePost(report_num){
        return axios.get(API_BASE_URL+`/report/${report_num}/exposure`)
    }
    deletePost(report_num){
        return axios.get(API_BASE_URL+`/report/${report_num}/delete`)
    }

    getApprovalList(){
        return axios.get(API_BASE_URL+"/approval")
    }
    rejectApproval(no){
        return axios.get(API_BASE_URL+`/approval/${no}/reject`)
    }
    acceptApproval(no,model_name){
        return axios.get(API_BASE_URL+`/approval/${no}/${model_name}`)
    }
    getApproval(no){
        return axios.get(API_BASE_URL+`/approval/${no}`)
    }
}

export default new PostingService();