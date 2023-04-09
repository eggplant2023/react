import React from "react"

const GetImageView = ({ src, closeView }) => {

    return (
        <div className="modal">
            <div className="modal_body">
                <div className="modal-header">
                <button onClick={closeView}>닫기</button>  
                    <h1>이미지 보기</h1>
                </div>
                <hr />
                <img src={src} className="img_view" />
            </div>
        </div>)
}

export default GetImageView