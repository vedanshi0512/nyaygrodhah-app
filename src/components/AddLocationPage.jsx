import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import axios from 'axios';

const AddLocationPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  color: black;
`;

const AddLocationPage = () => {
  const [source, setSource] = useState('');
  const [via, setVia] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/shortest-path/${source}/${via}/${destination}`);
    };

//   const handleSubmit = async () => {
//     const response = await axios.post('http://localhost:3001/api/shortest-path', {
//       source,
//       via,
//       destination
//     });
//     navigate('/shortest-path', { state: response.data });
//   };


  return (
    <AddLocationPageContainer>
      <h2>Add Locations</h2>
      <input 
        type="text" 
        placeholder="Source" 
        value={source} 
        onChange={(e) => setSource(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Via" 
        value={via} 
        onChange={(e) => setVia(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Destination" 
        value={destination} 
        onChange={(e) => setDestination(e.target.value)} 
      />
      <button onClick={handleSubmit}>Generate Shortest Path</button>
    </AddLocationPageContainer>
  );
};

export default AddLocationPage;
