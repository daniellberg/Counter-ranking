import React from 'react';

function Background() {
  const backgroundStyle = {
    width: '55%', // Defina a largura desejada (por exemplo, 80%)
    height: '80vh', // Defina a altura desejada (por exemplo, 60vh)
    backgroundColor: '#34D1BF', // Defina a cor desejada
    position: 'fixed',
    top: '50%', // Centralize verticalmente
    left: '50%', // Centralize horizontalmente
    transform: 'translate(-50%, -50%)', // Centralize o elemento
    zIndex: -1,
    borderRadius: '50px',
    opacity: '50%' // Centralizar horizontalmente
  };

  return <div style={backgroundStyle}></div>;
}

export default Background;
