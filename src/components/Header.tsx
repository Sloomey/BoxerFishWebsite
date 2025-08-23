
import { Link } from 'react-router-dom';
import BandLogo from '../assets/BandLogo.png'
import { PAGES } from '../constants';

function Header() {
  return (
    <Link to={PAGES.home}>
        <img src={BandLogo} className="logo" alt="Vite logo" style={{ width: '80px', height: 'auto' }} />
    </Link>
  );
}
export default Header;