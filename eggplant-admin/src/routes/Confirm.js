import GetConfirmList from "../components/GetConfirmList";
import Menu from "../components/Menu"; 

const Confirm = () => {
    return(
        <>
        <Menu/>
        <div className="post_container">
            <div className="header">
                <h1>게시글 승인</h1>
            </div>
            <hr />
            <div className="body">
                <GetConfirmList/>
                
            </div>
        </div>
        </>
    );
}

export default Confirm;