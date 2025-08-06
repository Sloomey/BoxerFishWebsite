import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {PAGES} from './constants'
import Home from './pages/Home'
import News from './pages/News'
import Music from './pages/Music'
import Store from './pages/Store'
import BandLogo from './assets/BandLogo.png'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
      <Link to={PAGES.home}>
        <img src={BandLogo} className="logo" alt="Vite logo" style={{ width: '80px', height: 'auto' }} />
      </Link>
      <Navbar />
        <Routes>
          <Route path={PAGES.home} element={<Home />} />
          <Route path={PAGES.news} element={<News />} />
          <Route path={PAGES.music} element={<Music />} />
          <Route path={PAGES.store} element={<Store />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
