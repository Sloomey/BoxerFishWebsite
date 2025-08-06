import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {PAGES} from './constants'
import Home from './pages/Home'
import News from './pages/News'
import Music from './pages/Music'
import Store from './pages/Store'
import BandLogo from './assets/BandLogo.png'

function App() {
  return (
    <>        
        <a href="https://vite.dev" target="_blank">
          <img src={BandLogo} className="logo" alt="Vite logo" style={{ width: '80px', height: 'auto' }} />
        </a>
      <Router>
        <nav>
          <Link to={PAGES.home}> Home </Link>
          <Link to={PAGES.news}> News </Link>
          <Link to={PAGES.music}> Music </Link>
          <Link to={PAGES.store}> Store </Link>
        </nav>
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
