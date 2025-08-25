import TourData from "../components/TourData.tsx";
import StreamingLinks from "../components/StreamingLinks";
import BandLogo from '../assets/BandLogo.png'
function Home() {
  return (
    <>
      <img src={BandLogo} alt="Band Logo" style={{ width: 'auto', height: '100vh' }} />

      <h1>Store</h1>
      <p>Check out the merch and support the band</p>
      <StreamingLinks />
      <h1>Shows</h1>
      <TourData />
    </>
  )
}

export default Home;
