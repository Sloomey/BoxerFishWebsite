import TourData from "../components/TourData.tsx";
import StreamingLinks from "../components/StreamingLinks";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <StreamingLinks />
      
      <h1>Store</h1>
      <p>Check out the merch and support the band</p>

      <h1>Shows</h1>
      <TourData />
    </>
  )
}

export default Home;
