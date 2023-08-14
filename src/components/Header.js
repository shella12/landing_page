import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className='flex upper-case-text'>
      <Hamburger toggled={isOpen} toggle={setOpen} size={30}/>
       <div className={isOpen? `active navlinks`:`not-active navlinks`}>
        <a href='/'>sign in</a>
        <a href='/'>legal</a>
        <a href='/'>licenses</a>
        <a href='/'>security</a>
        <a href='/'>careers</a>
        <a href='/'>press</a>
        <a href='/'>support</a>
        <a href='/'>status</a>
        <a href='/'>codeblog</a>
       </div>
    </nav>
  )
}

export default Header;
