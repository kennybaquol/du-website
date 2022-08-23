import { Link } from "react-router-dom"
import './NavBar.css'

export default function NavBar() {
    return (
        <main>
            {/* <img src="public/120145231_1742117679296647_8151332947136239940_n.jpg" alt="band-pic" /> */}
            <nav className="navbar container">
                <Link to='/' className="child">HOME</Link>
                <Link to='/' className="child">CONTACT</Link>
                <Link to='/' className="child">MERCH</Link>
                <Link to='/' className="child">SHOWS</Link>
                <Link to='/' className="child">SONG LIST</Link>
                <Link to='/' className="child">VIDEO</Link>
                {/* // Make sure to add Socials (icon links) */}
            </nav>
        </main>
    )
}