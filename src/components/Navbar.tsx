import { Link } from "react-router-dom"
import { PAGES } from "../constants"

function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '1rem',
            width: '100%',
            position: 'fixed',  
            top: 20,
            right: 75
        }}>
            <Link to={PAGES.shows}> Shows </Link>
            <Link to={PAGES.music}> Music </Link>
            <Link to={PAGES.store}> Store </Link>
        </nav>
    )
}

export default Navbar;