import React from 'react';

class EventListenerComponent extends React.Component {
  

  handleClick = () => {
    alert('AAAAAH! AAAAAH!');
    console.log('this is:', this);
  }

  render() {
    return <button onClick={this.handleClick}>AAAAAH!</button>;
  }
}

export default EventListenerComponent;
