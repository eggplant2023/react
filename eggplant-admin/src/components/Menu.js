import { NavLink } from "react-router-dom";

const Menu = () => (
    <nav className="menu_container">
        <table className="menu">
            <tr><td><NavLink to ="/">홈</NavLink></td></tr>
            <tr><td><NavLink to ="/users">회원 관리</NavLink></td></tr>
            <tr><td><NavLink to ="/posts">게시글 관리</NavLink></td></tr>
            <tr><td><NavLink to ="/reports">신고 목록</NavLink></td></tr>
            <tr><td><NavLink to ="/confirm">게시글 승인</NavLink></td></tr>
            <tr><td><NavLink to ="/question">1:1 문의</NavLink></td></tr>
            <tr><td><NavLink to ="/productinfo">제품 정보 관리</NavLink></td></tr>
        </table>
    </nav>
);

export default Menu;