import React from 'react';
import trollFace from '../images/troll-face.png'

const Header = () => {
  return <div>
      <header className='header'>
          <img src={trollFace} alt="Troll Face" className='troll-face' />
          <h2 className='title'>Meme Generator</h2>

          <h4 className='react'>React</h4>
      </header>
  </div>;
};

export default Header;
