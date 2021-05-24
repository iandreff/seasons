import React from 'react';

const seasonConfig = {
  summer:{
    text:'Let\'s hit the beach',
    icon:'sun' 
  },
  winter:{
    text:'blur, it is chilly',
    icon:'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month >2 && month <9) {
    return lat>0 ?'summer':'winter';
  } else {
    return lat>0 ?'winter':'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, icon} = seasonConfig[season];

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
    
    );
}
 
export default SeasonDisplay;

