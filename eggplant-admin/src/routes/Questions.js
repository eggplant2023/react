import GetQuestionList from "../components/GetQuestionList";
import Menu from "../components/Menu"; 
const Questions = () => {
    return(
        <>
        <Menu/>
        <div className="post_container">
            <div className="header">
                <h1>1 : 1 문의</h1>    
            </div>
            <hr />
            <div className="body">
                <GetQuestionList/>
                
            </div>
        </div>
        </>
    );
}

export default Questions;