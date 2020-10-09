import React from 'react'; 

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', height: '800px', paddingBottom: '150px'}}>
      {props.children}
    </div>
  )
}

export default Scroll;