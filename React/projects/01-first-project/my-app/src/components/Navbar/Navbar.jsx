import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <img src="https://img.icons8.com/dusk/2x/home.png" alt=""/>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <img src="https://img.icons8.com/dusk/2x/speech-bubble.png" alt=""/>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <img src="https://img.icons8.com/dusk/2x/news.png" alt=""/>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <img src="https://img.icons8.com/dusk/2x/music.png" alt=""/>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <img src="https://img.icons8.com/dusk/2x/settings.png" alt=""/>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
