import {BrowserRouter, Routes, Route } from 'react-router'
import {PAGES} from './constants'
import Shows from './pages/Shows'
import Home from './pages/Home'
import News from './pages/News'
import Music from './pages/Music'
import Store from './pages/Store'
import Navbar from './components/Navbar'
import Footer from './components/Foot'
import SocialBar from "./components/SocialBar"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path={PAGES.home} element={<Home />} />
            <Route path={PAGES.shows} element={<Shows />} />
            <Route path={PAGES.news} element={<News />} />
            <Route path={PAGES.music} element={<Music />} />
            <Route path={PAGES.store} element={<Store />} />
          </Routes>
      </BrowserRouter>
      <Footer />
      <SocialBar />
    </>
  )
}

export default App
