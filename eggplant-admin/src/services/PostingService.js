import axios from 'axios';


const server_ipv4 = "http://52.78.130.186";

//const API_BASE_URL = "http://localhost:8080/api";
const API_BASE_URL = "http://ec2-52-78-130-186.ap-northeast-2.compute.amazonaws.com:8080/api";

//const FLASK_BASE_URL = "http://localhost:5000";
const FLASK_BASE_URL = "http://ec2-52-78-130-186.ap-northeast-2.compute.amazonaws.com:5000";

class PostingService {
    getPosts() {
        return axios.get(API_BASE_URL+"/post");
    }

    createPost(post) {
        return axios.post(API_BASE_URL+"/post", post,{
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        });
    }

    getCategory(){
        return axios.get(API_BASE_URL+"/category",{ withCredentials: true})
    }

    getModel(){
        return axios.get(API_BASE_URL+"/model",{ withCredentials: true})
    }

    createCategory(category){
        return axios.post(API_BASE_URL+"/category",category,{ withCredentials: true})
    }

    createModel(model){
        return axios.post(API_BASE_URL+"/model",model,{ withCredentials: true})
    }

    getChatroom(){
        return axios.get(API_BASE_URL+"/chattingroom",{ withCredentials: true})
    }

    getSinglePost(num){
        return axios.get(API_BASE_URL+"/post/"+num,{ withCredentials: true})
    }

    getCategoriesModel(category){
        return axios.get(API_BASE_URL+"/"+category+"/model",{ withCredentials: true})
    }

    getChatList(roomnumber){
        return axios.get(API_BASE_URL+"/chatting/"+roomnumber,{ withCredentials: true})
    }

    getCategoryClassify(data){
        return axios.post(FLASK_BASE_URL+"/predict",data,{
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        })
    }

    getModelClassify(data){
        return axios.post(FLASK_BASE_URL+"/predict/smartphone",data,{
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        })
    }

    hidePost(report_num){
        return axios.get(API_BASE_URL+`/report/${report_num}/hide`,{ withCredentials: true})
    }
    getReportList(){
        return axios.get(API_BASE_URL+"/report",{ withCredentials: true})
    }
    exposurePost(report_num){
        return axios.get(API_BASE_URL+`/report/${report_num}/exposure`,{ withCredentials: true})
    }
    deletePost(report_num){
        return axios.get(API_BASE_URL+`/report/${report_num}/delete`,{ withCredentials: true})
    }

    getApprovalList(){
        return axios.get(API_BASE_URL+"/approval",{ withCredentials: true})
    }
    rejectApproval(no){
        return axios.get(API_BASE_URL+`/approval/${no}/reject`,{ withCredentials: true})
    }
    acceptApproval(no,model_name){
        return axios.get(API_BASE_URL+`/approval/${no}/${model_name}`,{ withCredentials: true})
    }
    getApproval(no){
        return axios.get(API_BASE_URL+`/approval/${no}`,{ withCredentials: true})
    }
}

export default new PostingService();