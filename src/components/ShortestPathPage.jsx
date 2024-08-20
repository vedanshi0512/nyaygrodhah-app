import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const ShortestPathPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  color: black;
`;


const ShortestPathPage = ({ source, via, destination }) => {
    // Simulate calculation of shortest path
    const shortestPath = `${source} -> ${via} -> ${destination}`;
  
    return (
      <div>
        <h2>Shortest Path</h2>
        <p>Shortest path is: {shortestPath}</p>
        <Link to="/end-journey">
          <button>End Journey</button>
        </Link>
      </div>
    );
  };
// const ShortestPathPage = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const { path, directions } = state;

//   const handleStartJourney = () => {
//     // Logic to handle starting the journey
//     navigate('/end-journey');
//   };

//   return (
//     <ShortestPathPageContainer>
//       <h2>Shortest Path</h2>
//       <p>Path: {path.join(' -> ')}</p>
//       <p>Directions: {directions}</p>
//       <button onClick={handleStartJourney}>Start Journey</button>
//     </ShortestPathPageContainer>
//   );
// };

export default ShortestPathPage;
