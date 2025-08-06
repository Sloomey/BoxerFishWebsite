import { Link } from "react-router-dom"
import { PAGES } from "../constants"

function Navbar() {
    return (
        <nav>
            <Link to={PAGES.home}> Home </Link>
            <Link to={PAGES.news}> News </Link>
            <Link to={PAGES.music}> Music </Link>
            <Link to={PAGES.store}> Store </Link>
        </nav>
    )
}

export default Navbar;