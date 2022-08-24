import { Link } from "react-router-dom"
import './NavBar.css'

export default function NavBar() {
    return (
        <main>
            <nav className="navbar container">
                <Link to='/' className="child">HOME</Link>
                <Link to='/contact' className="child">CONTACT</Link>
                {/* <Link to='/merch' className="child">MERCH</Link> */}
                <Link to='/shows' className="child">SHOWS</Link>
                <Link to='/songlist' className="child">SONG LIST</Link>
                <Link to='/video' className="child">VIDEO</Link>
                {/* // Make sure to add Socials (icon links) */}
            </nav>
        </main>
    )
}