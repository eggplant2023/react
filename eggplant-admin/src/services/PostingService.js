import axios from 'axios';


const server_ipv4 = "http://52.78.130.186";

//const API_BASE_URL = "http://localhost:8080/api";
const API_BASE_URL = server_ipv4 + ":8080/api";

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

    getSinglePost(num, usernum){
        return axios.get(API_BASE_URL+`/post/${usernum}/${num}`)
    }

    getAdminChatroom(num){
        return axios.get(API_BASE_URL+`/chattingroom/guest/${num}`)
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

    exposureReport(report_num){
        return axios.get(API_BASE_URL+`/report/${report_num}/exposure`)
    }

    deleteReport(report_num){
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
    
    updatePost(postnum, post){
        return axios.post(API_BASE_URL+`/post/${postnum}/modify`, post,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
    getVisitList(userno){
        return axios.get(API_BASE_URL+`/visit/${userno}`)
    }

    getLikeList(userno){
        return axios.get(API_BASE_URL+`/like/${userno}`)
    }

    getSellerLocation(post){
        return axios.get(API_BASE_URL+`/post/location/${post}`)
    }

    getNearLocation(lon, lat, distance){
        return axios.get(API_BASE_URL+`/post/lonlat/${lon}/${lat}/${distance}`)
    }

    getUserList(){
        return axios.get(API_BASE_URL+'/user/info')
    }

    getAdminChatroom(admin) {
        return axios.get(API_BASE_URL+`/chattingroom/guest/${admin}`)
    }

    getUserInfo(num) {
        return axios.get(API_BASE_URL+`/user/info/${num}`)
    }
}


export default new PostingService();