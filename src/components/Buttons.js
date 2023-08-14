import React from 'react';

function Buttons(props) {
    const {src, label} = props;
  return (
    <>
    <button className='btn flex upper-case-text'><img className="btn-images" src={src} alt="play store button"/>{label}</button>
    </>
  )
}


export default Buttons
