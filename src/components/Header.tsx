
import { Link } from 'react-router-dom';
import BandLogo from '../assets/BandLogo.png'
import { PAGES } from '../constants';

function Header() {
  return (
    <Link
      to={PAGES.home}
      style={{
        position: 'fixed',
        top: 0,
        left: '2rem',
        zIndex: 9999
      }}
    >
      <img src={BandLogo} alt="Band Logo" style={{ width: '80px', height: 'auto' }} />
    </Link>
  );
}
export default Header;