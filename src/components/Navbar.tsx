import { Link } from "react-router-dom"
import { PAGES } from "../constants"
import BandLogo from '../assets/BandLogo.png'

function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
        }}>
        <Link to={PAGES.home}>
            <img src={BandLogo} className="logo" alt="Vite logo" style={{ width: '80px', height: 'auto' }} />
        </Link>
        <Link to={PAGES.shows}> Shows </Link>
        <Link to={PAGES.music}> Music </Link>
        <Link to={PAGES.store}> Store </Link>
        </nav>
    )
}

export default Navbar;