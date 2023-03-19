import {useRef} from "react";
import "../Styles/main.css";

function Header () {
    const navRef = useRef();
    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <ul>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">Menu</a></li>
                    <li><a href="/#">About us</a></li>
                    <li><a href="/#">Shop</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;