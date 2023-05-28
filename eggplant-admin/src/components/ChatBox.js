import { useEffect, useState } from "react";
import PostingService from "../services/PostingService";
const ChatBox = ({ currentUserId,
    currentUser, setMessages, messages,
    onSendMessage, connected, roomnumber }) => {

    const [chat, setChat] = useState("")
    useEffect(() => {
        PostingService.getChatList(roomnumber).then((res) => {
            var msg = []
            console.log(res.data)
            for (let i = 0; i < res.data.chattingList.length; i++) {
                msg[i] = {
                    message: res.data.chattingList[i].cht_text,
                    authorId: res.data.chattingList[i].cht_member,
                    author: res.data.chattingList[i].cht_member_name,
                    timestamp: res.data.chattingList[i].cht_time
                }
                console.log(msg[i])

            }
            setMessages(msg)
        })

    }, [])


    const chatChange = (e) => {
        setChat(e.target.value)
    }

    const onSend = () => {
        onSendMessage(chat)
        setChat("")
    }

    return (
        <div>
        <div className="chatbox">
            {messages.map((msg) =>
                msg.authorId == "71" ?
                    <div className="mychat">
                        <div className="mychat_massage">{msg.message}</div>{msg.timestamp}
                    </div>
                    :
                    <div className="otherchat">
                        {msg.author}<br />
                        <div className="otherchat_massage">{msg.message}</div>{msg.timestamp}
                    </div>
            )

            }

        
        </div>
        <input className="chat_input" onChange={chatChange} value={chat}></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={onSend}>보내기</button>
        </div>
        );
}

export default ChatBox;