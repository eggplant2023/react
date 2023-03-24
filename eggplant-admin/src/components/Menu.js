import { NavLink } from "react-router-dom";

const Menu = () => (
        
    <div  className="menu_container">
    <nav>
        <ul className="menu_list">
            <li>대충가지마켓아이콘</li>
            <NavLink to ="/"><li>홈</li></NavLink>
            <NavLink to ="/users"><li>회원 관리</li></NavLink>
            <NavLink to ="/posts"><li>게시글 관리</li></NavLink>
            <NavLink to ="/reports"><li>신고 목록</li></NavLink>
            <NavLink to ="/confirm"><li>게시글 승인</li></NavLink>
            <NavLink to ="/question"><li>1:1 문의</li></NavLink>
            <NavLink to ="/productinfo"><li>제품 정보 관리</li></NavLink>
            <NavLink to ="/chatroom"><li>채팅방 관리</li></NavLink>
        </ul>
    </nav>
    </div>
);

export default Menu;