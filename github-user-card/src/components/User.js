import React from 'react';

const User = props => {
  return(
    <div>
      <div>
        <img src={props.image} style={{height: "400px", width: "400px"}} />
        <h3>{props.login}'s followers</h3>
      </div>
    </div>
  )
}

export default User;