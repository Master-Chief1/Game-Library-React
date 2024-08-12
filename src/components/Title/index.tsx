import React from 'react';
import { Title } from './styles'; // Adjust the path based on your file structure

const TitleComponent = () => {
  const handleReload = () => {
    window.location.reload(); // This will reload the page
  };

  return (
    
    <Title onClick={handleReload}>
      Games Library
    </Title>
    
  );
};

export default TitleComponent;
