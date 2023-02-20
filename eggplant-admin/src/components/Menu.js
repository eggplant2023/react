import { NavLink } from "react-router-dom";

const Menu = () => (
    <nav className="menu">
        <NavLink to ="/">홈</NavLink>
        <NavLink to ="/users">회원 관리</NavLink>
        <NavLink to ="/posts">게시글 관리</NavLink>
        <NavLink to ="/reports">신고 목록</NavLink>
        <NavLink to ="/confirm">게시글 승인</NavLink>
        <NavLink to ="/question">1:1 문의</NavLink>
        <NavLink to ="/productinfo">제품 정보 관리</NavLink>
    </nav>
);

export default Menu;