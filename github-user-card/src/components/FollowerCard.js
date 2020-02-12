import React, { fragment } from 'react';

const FollowerCard = props => {
  return(
    <>
      <div>
        <img src={props.image} style={{height: "400px", width: "400px"}}/>
      </div>
    </>
  )
}

export default FollowerCard;