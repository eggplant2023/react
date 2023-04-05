import GetQuestionList from "../components/GetQuestionList";

const Questions = () => {
    return(
        <div className="post_container">
            <div className="header">
                <h1>1 : 1 문의</h1>    
            </div>
            <hr />
            <div className="body">
                <GetQuestionList/>
                
            </div>
        </div>
    );
}

export default Questions;