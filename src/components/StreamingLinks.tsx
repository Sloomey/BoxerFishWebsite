import { musicLinks } from "../data/musicLinks.tsx";

import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 15px 15px;
  border-radius: 5px;
  outline: 0; 
  border: 0; 
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: grey;
  }
`;     

function clickMe() {
  alert("You clicked me!");
}



export default function StreamingLinks() {
  return (
    <div style={{margin: '2rem' }}>
      <div style={{
              display: 'flex', 
              justifyContent: 'center',
              gap: '1rem',
              }}>
        {musicLinks.map((link) => (
          <div key={link.name}>
            <div>
              <Button onClick={() => window.open(link.url, '_blank')}>
                {link.icon} 
                _
                {link.name}
              </Button>
            </div>
          </div>
      ))}
      </div>
    </div>
  );
}