import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {PAGES} from './constants'
import Shows from './pages/Shows'
import Home from './pages/Home'
import News from './pages/News'
import Music from './pages/Music'
import Store from './pages/Store'
import Navbar from './components/Navbar'
import Footer from './components/Foot'

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path={PAGES.home} element={<Home />} />
          <Route path={PAGES.shows} element={<Shows />} />
          <Route path={PAGES.news} element={<News />} />
          <Route path={PAGES.music} element={<Music />} />
          <Route path={PAGES.store} element={<Store />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
