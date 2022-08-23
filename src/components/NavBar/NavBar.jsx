// Make sure to add Socials (icon links)

import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Merch</Link>
            <Link to='/'>Shows</Link>
            <Link to='/'>Song List</Link>
            <Link to='/'>Video</Link>
        </nav>
    )
}