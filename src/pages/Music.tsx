import StreamingLinks from "../components/StreamingLinks";

function Music() {
  return (
    <div style = {{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      width: '60%',
      position: 'fixed',  
      top: 100,
      right: 75}}>
      <h1>Music</h1>
      <StreamingLinks />
    </div>
  )
}

export default Music;
