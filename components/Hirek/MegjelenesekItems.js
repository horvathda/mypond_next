import React from 'react';


function MegjelenesekItems(props) {


  return (
      <React.Fragment>
      <div className="megjelenesek_box">
          <a className="megjelenesek_link" href={props.href} target="_blank" rel="noopener noreferrer" >{props.text} </a>
          </div>
        
    </React.Fragment>
  );
}

export default MegjelenesekItems;