import React from 'react';
import './Card.css';

const Card = ({ id, name, email }) => {
  return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?set=set4&size=200x200`}/>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card




